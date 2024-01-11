import { NestFactory } from '@nestjs/core';
import { DiscountModule } from './discount.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DISCOUNT_PACKAGE_NAME } from '@app/common';
import { Logger } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DiscountModule,
    {
      transport: Transport.GRPC,
      options: {
        package: DISCOUNT_PACKAGE_NAME,
        protoPath: join(__dirname, '../discount.proto'),
      },
    },
  );
  const schemaGenerator = app.get(MikroORM).getSchemaGenerator();

  await schemaGenerator.ensureDatabase();

  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    await schemaGenerator.dropSchema();
    Logger.warn('Schema dropped', 'Database');

    await schemaGenerator.createSchema();
    Logger.warn('Schema created', 'Database');
  } else {
    Logger.warn(
      await schemaGenerator.getUpdateSchemaSQL({
        safe: true,
      }),
      'Database Migration',
    );
  }

  await app.listen();
  Logger.log(`Grpc serer started at http://[::1]:5000`, 'NestMicroservice');
}
bootstrap();

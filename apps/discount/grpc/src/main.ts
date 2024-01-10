import { NestFactory } from '@nestjs/core';
import { DiscountModule } from './discount.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DISCOUNT_PACKAGE_NAME } from '@app/common';
import { Logger } from '@nestjs/common';

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
  await app.listen();
  Logger.log(`Grpc serer started at http://[::1]:5000`, 'NestMicroservice');
}
bootstrap();

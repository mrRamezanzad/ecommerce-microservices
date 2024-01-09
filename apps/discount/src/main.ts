import { NestFactory } from '@nestjs/core';
import { DiscountModule } from './discount.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(DiscountModule);
  const schemaGenerator = app.get(MikroORM).getSchemaGenerator()

  await schemaGenerator.ensureDatabase();

  const isProduction = process.env.NODE_ENV === "production"
  if (!isProduction) {
    await schemaGenerator.dropSchema();
    await schemaGenerator.createSchema();

  } else {
    Logger.warn(await schemaGenerator.getUpdateSchemaSQL({
      safe: true
    }), 'Database Migration');
  }

  const config = new DocumentBuilder()
    .setTitle('Discount API')
    .setDescription('Thiss documentation shows how to do CRUD on the coupons.')
    .setVersion('1.0')
    .addTag('discount')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(`Application is running on: ${await app.getUrl()}`)
  Logger.log(`Documentation is running on: ${await app.getUrl()}/api`)
}
bootstrap();

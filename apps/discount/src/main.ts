import { NestFactory } from '@nestjs/core';
import { DiscountModule } from './discount.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(DiscountModule);
  const config = new DocumentBuilder()
    .setTitle('Discount API')
    .setDescription('Thiss documentation shows how to do CRUD on the coupons.')
    .setVersion('1.0')
    .addTag('discount')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(`Documentation is running on: ${await app.getUrl()}/api`)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);

  const config = new DocumentBuilder()
    .setTitle('Order API')
    .setDescription('This documentation shows how to work with orders.')
    .setVersion('1.0')
    .addTag('order')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
  Logger.log(`Documentation is running on: ${await app.getUrl()}/api`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { BasketModule } from './basket.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BasketModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Basket API')
    .setDescription('Showing how to use Baket service.')
    .setVersion('1.0')
    .addTag('basket')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3002);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
  Logger.log(`Documentation is running on: ${await app.getUrl()}/api`);
}
bootstrap();

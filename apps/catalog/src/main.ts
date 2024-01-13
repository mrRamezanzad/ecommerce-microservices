import { NestFactory } from '@nestjs/core';
import { CatalogModule } from './catalog.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CatalogModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Catalog API')
    .setDescription('Showing how to use Catalog of products.')
    .setVersion('1.0')
    .addTag('catalog')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3001);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
  Logger.log(`Documentation is running on: ${await app.getUrl()}/api`);
}
bootstrap();

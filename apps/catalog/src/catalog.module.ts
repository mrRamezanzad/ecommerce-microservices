import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { ProductRespository } from './repository/product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}/${process.env.DATABASE_NAME}`,
      {
        user: process.env.MONGO_USERNAME,
        pass: process.env.MONGO_PASSWORD,
        authSource: 'admin',
      },
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CatalogController],
  providers: [CatalogService, ProductRespository],
})
export class CatalogModule {}

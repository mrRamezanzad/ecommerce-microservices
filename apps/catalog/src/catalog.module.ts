import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}

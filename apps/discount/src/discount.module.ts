import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName: process.env.DATABASE_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      type: 'postgresql',
      discovery: { warnWhenNoEntities: false }
    }),
    MikroOrmModule.forFeature({
      entities: []
    }),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}

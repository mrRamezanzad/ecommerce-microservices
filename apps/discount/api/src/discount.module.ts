import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { CouponRepository } from './repository/coupon.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Coupon } from './entity/coupon.entity';
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
      discovery: { warnWhenNoEntities: false },
    }),
    MikroOrmModule.forFeature({
      entities: [Coupon],
    }),
  ],
  controllers: [DiscountController],
  providers: [CouponRepository, DiscountService],
})
export class DiscountModule {}

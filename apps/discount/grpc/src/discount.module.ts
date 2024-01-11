import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Coupon } from './entity/coupon.entity';
import { CouponRepository } from './repository/coupon.repository';
import { DiscountService } from './discount.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      type: 'postgresql',
      dbName: process.env.DATABASE_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
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

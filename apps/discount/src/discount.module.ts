import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName: process.env.DATABASE_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      type: 'postgresql',
      discovery: { warnWhenNoEntities: false }
    }),
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}

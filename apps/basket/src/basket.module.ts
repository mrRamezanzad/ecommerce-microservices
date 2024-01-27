import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { BasketRepository } from './repository/basket.repository';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DISCOUNT_PACKAGE_NAME } from '@app/common';
import { DiscountService } from './grpc/discount.service';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
      url: process.env.REDIS_URL,
    }),
    ClientsModule.register([
      {
        name: DISCOUNT_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: DISCOUNT_PACKAGE_NAME,
          protoPath: join(__dirname, '../discount.proto'),
        },
      },
    ]),
  ],
  controllers: [BasketController],
  providers: [BasketService, BasketRepository, DiscountService],
})
export class BasketModule {}

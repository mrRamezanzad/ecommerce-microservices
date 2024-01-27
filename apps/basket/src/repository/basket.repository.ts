import { Injectable } from '@nestjs/common';
import { ShoppingCart } from '../entity/shoppingCart.entity';
import { IBasketRespiroty } from './interfaces/basketRepository.interface';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';

@Injectable()
export class BasketRepository implements IBasketRespiroty {
  constructor(@InjectRedis() private readonly db: Redis) {}

  async getBasket(username: string): Promise<ShoppingCart> {
    return JSON.parse(await this.db.get(username));
  }

  async updateBasket(basket: ShoppingCart): Promise<ShoppingCart> {
    await this.db.set(basket.username, JSON.stringify(basket));

    const basketInDb = await this.db.get(basket.username);
    return JSON.parse(basketInDb);
  }

  async deleteBasket(username: string): Promise<boolean> {
    const result = await this.db.del(username);
    return result > 0;
  }
}

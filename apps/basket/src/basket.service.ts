import { Injectable } from '@nestjs/common';
import { BasketRepository } from './repository/basket.repository';
import { ShoppingCart } from './entity/shoppingCart.entity';
import { DiscountService } from './grpc/discount.service';

@Injectable()
export class BasketService {
  constructor(
    private readonly basketRepository: BasketRepository,
    private readonly discountService: DiscountService,
  ) {}

  getBasket(username: string): ShoppingCart | Promise<ShoppingCart> {
    return this.basketRepository.getBasket(username);
  }

  async updateBasket(basket: ShoppingCart): Promise<ShoppingCart> {
    for (const item of basket.items) {
      try {
        const coupon = await this.discountService.getDiscount(item.productName);
        item.price -= coupon.amount;
      } catch (err) {
        console.log('rpc exception', { err: err.details });
      }
    }

    return this.basketRepository.updateBasket(basket);
  }

  deleteBasket(username: string): boolean | Promise<boolean> {
    return this.basketRepository.deleteBasket(username);
  }
}

import { Injectable } from '@nestjs/common';
import { BasketRepository } from './repository/basket.repository';
import { ShoppingCart } from './entity/shoppingCart.entity';

@Injectable()
export class BasketService {
  constructor(private readonly basketRepository: BasketRepository) {}

  getBasket(username: string): ShoppingCart | Promise<ShoppingCart> {
    return this.basketRepository.getBasket(username);
  }

  updateBasket(basket: ShoppingCart): ShoppingCart | Promise<ShoppingCart> {
    // TODO: get latest price from discount grpc service
    return this.basketRepository.updateBasket(basket);
  }

  deleteBasket(username: string): boolean | Promise<boolean> {
    return this.basketRepository.deleteBasket(username);
  }
}

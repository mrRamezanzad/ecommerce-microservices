import { ShoppingCart } from '../entity/shoppingCart.entity';
import { IBasketRespiroty } from './interfaces/basketRepository.interface';

export class BasketRepository implements IBasketRespiroty {
  constructor(private readonly _db) {}

  getBasket(username: string): ShoppingCart | Promise<ShoppingCart> {
    throw new Error('Method not implemented.');
  }

  updateBasket(basket: ShoppingCart): ShoppingCart | Promise<ShoppingCart> {
    throw new Error('Method not implemented.');
  }

  deleteBasket(username: string): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

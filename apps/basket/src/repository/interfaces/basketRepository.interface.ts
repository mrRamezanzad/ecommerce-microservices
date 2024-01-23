import { ShoppingCart } from '../../entity/shoppingCart.entity';

export interface IBasketRespiroty {
  getBasket(username: string): ShoppingCart | Promise<ShoppingCart>;

  updateBasket(basket: ShoppingCart): ShoppingCart | Promise<ShoppingCart>;

  deleteBasket(username: string): boolean | Promise<boolean>;
}

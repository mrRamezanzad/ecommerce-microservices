import { ShoppingCartItem } from './shoppingCartItem.entity';

export class ShoppingCart {
  username: string;

  items: ShoppingCartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;

    const hasShoppingCartItem = this.items.length > 0;
    if (hasShoppingCartItem) {
      for (const item of this.items) {
        // TODO: get last price from discount grpc service and add to totalPrice
        const lastPrice = 0;
        totalPrice += lastPrice;
      }
    }

    return totalPrice;
  }
}

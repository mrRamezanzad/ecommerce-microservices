import { ShoppingCartItem } from './shoppingCartItem.entity';

export class ShoppingCart {
  username: string;

  items: ShoppingCartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;

    const hasShoppingCartItem = this.items.length > 0;
    if (hasShoppingCartItem) {
      for (const item of this.items) {
        totalPrice += item.price;
      }
    }

    return totalPrice;
  }
}

import { BasketItemDto } from '../dtos/basketItem.dto';
import { ShoppingCartItem } from '../entity/shoppingCartItem.entity';

export class ShoppingCartItemMapper {
  static toDomain(raw: BasketItemDto): ShoppingCartItem {
    const shoppingCartItem = new ShoppingCartItem();

    shoppingCartItem.productId = raw.productId;
    shoppingCartItem.productName = raw.productName;
    shoppingCartItem.color = raw.color;
    shoppingCartItem.price = raw.price;
    shoppingCartItem.quantity = raw.quantity;

    return shoppingCartItem;
  }
}

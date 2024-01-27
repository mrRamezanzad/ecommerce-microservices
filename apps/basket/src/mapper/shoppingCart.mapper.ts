import { UpdateBasketDto } from '../dtos/updateBasket.dto';
import { ShoppingCart } from '../entity/shoppingCart.entity';
import { ShoppingCartItemMapper } from './shoppingCartItem.mapper';

export class ShoppingCartMapper {
  static toDomain(raw: UpdateBasketDto): ShoppingCart {
    const shoppingCart = new ShoppingCart();

    shoppingCart.username = raw.username;
    shoppingCart.items = raw.items.map((item) =>
      ShoppingCartItemMapper.toDomain(item),
    );

    return shoppingCart;
  }
}

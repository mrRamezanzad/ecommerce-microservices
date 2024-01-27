import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiTags } from '@nestjs/swagger';
import { ShoppingCart } from './entity/shoppingCart.entity';
import { UpdateBasketDto } from './dtos/updateBasket.dto';
import { ShoppingCartMapper } from './mapper/shoppingCart.mapper';

@ApiTags('basket')
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Get(':username')
  async getBasket(@Param('username') username: string): Promise<ShoppingCart> {
    const basket = await this.basketService.getBasket(username);
    return basket ?? new ShoppingCart(username);
  }

  @Patch()
  updateBasket(
    @Body() updateBasketDto: UpdateBasketDto,
  ): ShoppingCart | Promise<ShoppingCart> {
    const shoppingCart = ShoppingCartMapper.toDomain(updateBasketDto);

    return this.basketService.updateBasket(shoppingCart);
  }

  @Delete(':username')
  deleteBasket(
    @Param('username') username: string,
  ): boolean | Promise<boolean> {
    return this.basketService.deleteBasket(username);
  }
}

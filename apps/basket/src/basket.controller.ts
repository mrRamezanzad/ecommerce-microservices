import { Controller, Get } from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('basket')
@Controller()
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Get()
  getHello(): string {
    return this.basketService.getHello();
  }
}

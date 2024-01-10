import { Controller, Get } from '@nestjs/common';
import { DiscountService } from './discount.service';

@Controller()
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  getHello(): string {
    return this.discountService.getHello();
  }
}

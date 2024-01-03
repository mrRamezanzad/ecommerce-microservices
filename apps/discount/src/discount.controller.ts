import { Controller, Get, Param } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { ICoupon } from './entity/coupon.entity.interface';

@Controller('discounts')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get(':productName')
  getDiscount(@Param('productName') productName: string): Promise<ICoupon> {
    return this.discountService.getDiscount(productName);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dtos/createDiscount.dto';
import { Coupon } from './entity/coupon.entity';

@Controller('discounts')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  createDiscount(
    @Body() createDiscountDto: CreateDiscountDto,
  ): Promise<Coupon> {
    return this.discountService.create(createDiscountDto);
  }

  @Get(':productName')
  getDiscount(@Param('productName') productName: string): Promise<Coupon> {
    return this.discountService.getDiscount(productName);
  }
}

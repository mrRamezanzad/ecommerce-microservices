import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dtos/createDiscount.dto';
import { Coupon } from './entity/coupon.entity';
import { UpdateDiscountDto } from './dtos/updateDiscount.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('discount')
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

  @Patch()
  updateDiscount(
    @Body() updateDiscountDto: UpdateDiscountDto,
  ): Promise<Coupon> {
    return this.discountService.updateDiscount(updateDiscountDto);
  }

  @Delete(':productName')
  deleteDiscount(@Param('productName') productName: string): Promise<boolean> {
    return this.discountService.deleteDiscount(productName);
  }
}

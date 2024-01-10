import { Controller, Get } from '@nestjs/common';
import { DiscountService } from './discount.service';
import {
  Coupon,
  CreateDiscountRequest,
  DeleteDiscountRequest,
  DeleteDiscountResponse,
  DiscountServiceController,
  DiscountServiceControllerMethods,
  GetDiscountRequest,
  UpdateDiscountRequest,
} from '@app/common';

@Controller()
@DiscountServiceControllerMethods()
export class DiscountController implements DiscountServiceController {
  constructor(private readonly discountService: DiscountService) {}

  getDiscount(request: GetDiscountRequest): Coupon | Promise<Coupon> {
    throw new Error('Method not implemented.');
  }

  createDiscount(request: CreateDiscountRequest): Coupon | Promise<Coupon> {
    throw new Error('Method not implemented.');
  }

  updateDiscount(request: UpdateDiscountRequest): Coupon | Promise<Coupon> {
    throw new Error('Method not implemented.');
  }

  deleteDiscount(
    request: DeleteDiscountRequest,
  ): DeleteDiscountResponse | Promise<DeleteDiscountResponse> {
    throw new Error('Method not implemented.');
  }
}

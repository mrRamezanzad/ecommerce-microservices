import { Controller } from '@nestjs/common';
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
import { DiscountService } from './discount.service';

@Controller()
@DiscountServiceControllerMethods()
export class DiscountController implements DiscountServiceController {
  constructor(private readonly discountService: DiscountService) {}

  getDiscount(request: GetDiscountRequest): Coupon | Promise<Coupon> {
    return this.discountService.getDiscount(request.productName);
  }

  createDiscount(request: CreateDiscountRequest): Coupon | Promise<Coupon> {
    return this.discountService.create({
      ...request,
      amount: parseInt(request.amount.toString()),
    });
  }

  updateDiscount(request: UpdateDiscountRequest): Coupon | Promise<Coupon> {
    return this.discountService.updateDiscount(request);
  }

  async deleteDiscount(
    request: DeleteDiscountRequest,
  ): Promise<DeleteDiscountResponse> {
    const success = await this.discountService.deleteDiscount(
      request.productName,
    );
    return {
      success,
    };
  }
}

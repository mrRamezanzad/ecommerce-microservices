import { Injectable } from '@nestjs/common';
import { ICoupon } from './entity/coupon.entity.interface';
import { ICouponRepository } from './repository/coupon.repository.interface';

@Injectable()
export class DiscountService {
  constructor(private readonly couponRepository: ICouponRepository) {}

  async getDiscount(productName: string): Promise<ICoupon> {
    return this.couponRepository.getDiscount(productName);
  }
}

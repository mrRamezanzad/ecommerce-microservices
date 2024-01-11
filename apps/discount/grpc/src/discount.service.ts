import { Injectable } from '@nestjs/common';
import { Coupon } from './entity/coupon.entity';
import { CouponRepository } from './repository/coupon.repository';

@Injectable()
export class DiscountService {
  constructor(private readonly couponRepository: CouponRepository) {}

  async create(coupon: Partial<Coupon>): Promise<Coupon> {
    return this.couponRepository.createDiscount(coupon);
  }

  async getDiscount(productName: string): Promise<Coupon> {
    return this.couponRepository.getDiscount(productName);
  }

  async updateDiscount(coupon: Partial<Coupon>): Promise<Coupon> {
    return this.couponRepository.updateDiscount(coupon);
  }

  async deleteDiscount(productName: string): Promise<boolean> {
    return this.couponRepository.deleteDiscount(productName);
  }
}

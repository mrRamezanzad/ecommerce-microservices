import { Injectable } from '@nestjs/common';
import { CouponRepository } from './repository/coupon.repository';
import { CreateDiscountDto } from './dtos/createDiscount.dto';
import { Coupon } from './entity/coupon.entity';

@Injectable()
export class DiscountService {
  constructor(private readonly couponRepository: CouponRepository) {}

  async create(createDiscountDto: CreateDiscountDto): Promise<Coupon> {
    return this.couponRepository.createDiscount(createDiscountDto);
  }

  async getDiscount(productName: string): Promise<Coupon> {
    return this.couponRepository.getDiscount(productName);
  }
}

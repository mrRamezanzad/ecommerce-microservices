import { Injectable } from '@nestjs/common';
import { CouponRepository } from './repository/coupon.repository';
import { CreateDiscountDto } from './dtos/createDiscount.dto';
import { Coupon } from './entity/coupon.entity';
import { UpdateDiscountDto } from './dtos/updateDiscount.dto';

@Injectable()
export class DiscountService {
  constructor(private readonly couponRepository: CouponRepository) {}

  async create(createDiscountDto: CreateDiscountDto): Promise<Coupon> {
    return this.couponRepository.createDiscount(createDiscountDto);
  }

  async getDiscount(productName: string): Promise<Coupon> {
    return this.couponRepository.getDiscount(productName);
  }

  async updateDiscount(updateDiscountDto: UpdateDiscountDto): Promise<boolean> {
    return this.couponRepository.updateDiscount(updateDiscountDto);
  }

  async deleteDiscount(productName: string): Promise<boolean> {
    return this.couponRepository.deleteDiscount(productName);
  }
}

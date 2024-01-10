import { CreateDiscountDto } from '../dtos/createDiscount.dto';
import { UpdateDiscountDto } from '../dtos/updateDiscount.dto';
import { Coupon } from '../entity/coupon.entity';

export interface ICouponRepository {
  getDiscount(productName: string): Promise<Coupon> | Coupon;
  createDiscount(coupon: CreateDiscountDto): Promise<Coupon> | Coupon;
  updateDiscount(coupon: UpdateDiscountDto): Promise<Coupon> | Coupon;
  deleteDiscount(productName: string): Promise<boolean> | boolean;
}

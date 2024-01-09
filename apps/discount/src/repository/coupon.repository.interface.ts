import { CreateDiscountDto } from '../dtos/createDiscount.dto';
import { UpdateDiscountDto } from '../dtos/updateDiscount.dto';
import { ICoupon } from '../entity/coupon.entity.interface';

export interface ICouponRepository {
  getDiscount(productName: string): Promise<ICoupon> | ICoupon;
  createDiscount(coupon: CreateDiscountDto): Promise<ICoupon> | ICoupon;
  updateDiscount(coupon: UpdateDiscountDto): Promise<boolean> | boolean;
  deleteDiscount(productName: string): Promise<boolean> | boolean;
}

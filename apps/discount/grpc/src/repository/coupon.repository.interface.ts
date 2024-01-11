import { Coupon } from '../entity/coupon.entity';

export interface ICouponRepository {
  getDiscount(productName: string): Promise<Coupon> | Coupon;
  createDiscount(coupon: Partial<Coupon>): Promise<Coupon> | Coupon;
  updateDiscount(coupon: Partial<Coupon>): Promise<Coupon> | Coupon;
  deleteDiscount(productName: string): Promise<boolean> | boolean;
}

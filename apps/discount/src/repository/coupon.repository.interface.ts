import { ICoupon } from '../entity/coupon.entity.interface';

export interface ICouponRepository {
  getDiscount(productName: string): Promise<ICoupon>;
  createDiscount(coupon: ICoupon): Promise<ICoupon>;
  updateDiscount(coupon: Partial<ICoupon>): Promise<boolean>;
  deleteDiscount(productName: string): Promise<boolean>;
}

import { ICoupon } from '../entity/coupon.entity.interface';
import { ICouponRepository } from './coupon.repository.interface';

export class CouponRepository implements ICouponRepository {
  getDiscount(productName: string): Promise<ICoupon> {
    throw new Error('Method not implemented.');
  }

  createDiscount(coupon: ICoupon): Promise<ICoupon> {
    throw new Error('Method not implemented.');
  }

  updateDiscount(coupon: Partial<ICoupon>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  deleteDiscount(productName: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

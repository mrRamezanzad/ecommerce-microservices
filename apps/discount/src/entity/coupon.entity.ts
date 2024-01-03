import { ICoupon } from './coupon.entity.interface';

export class Coupon implements ICoupon {
  constructor(
    public id: string,
    public productName: string,
    public description: string,
    public amount: number,
  ) {}
}

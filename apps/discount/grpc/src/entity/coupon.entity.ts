import {
  Entity,
  FloatType,
  PrimaryKey,
  Property,
  StringType,
  Unique,
} from '@mikro-orm/core';
import { ICoupon } from './coupon.entity.interface';

@Entity({
  tableName: 'coupons',
})
export class Coupon implements ICoupon {
  @PrimaryKey({ autoincrement: true, type: 'varchar' })
  public id: string;

  @Property({
    type: StringType,
  })
  @Unique()
  public productName: string;

  @Property({
    type: StringType,
  })
  public description: string;

  @Property({
    type: FloatType,
  })
  public amount: number;

  constructor(productName: string, description: string, amount: number) {
    this.productName = productName;
    this.description = description;
    this.amount = amount;
  }
}

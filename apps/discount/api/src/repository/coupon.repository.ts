import { BadRequestException, Injectable } from '@nestjs/common';
import { Coupon } from '../entity/coupon.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { CreateDiscountDto } from '../dtos/createDiscount.dto';
import { ICouponRepository } from './coupon.repository.interface';
import { UpdateDiscountDto } from '../dtos/updateDiscount.dto';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class CouponRepository
  extends EntityRepository<Coupon>
  implements ICouponRepository
{
  constructor(private readonly globalEntityManager: EntityManager) {
    super(globalEntityManager.fork(), Coupon.name);
  }

  async getDiscount(productName: string): Promise<Coupon> {
    try {
      const couponEntity = await this.findOne({ productName });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      return couponEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async createDiscount(coupon: CreateDiscountDto): Promise<Coupon> {
    try {
      let couponEntity = await this.findOne({
        productName: coupon.productName,
      });

      if (!couponEntity) {
        couponEntity = this.create(coupon);
        await this.globalEntityManager.persist(couponEntity).flush();
      }

      return couponEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async updateDiscount(coupon: UpdateDiscountDto): Promise<Coupon> {
    try {
      const couponEntity = await this.findOne({
        id: coupon.id,
      });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      wrap(couponEntity).assign(coupon);
      await this.globalEntityManager.persist(couponEntity).flush();
      return couponEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async deleteDiscount(productName: string): Promise<boolean> {
    try {
      const couponEntity = await this.findOne({ productName });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      this.globalEntityManager.removeAndFlush(couponEntity);
      return couponEntity && true;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}

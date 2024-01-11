import { BadRequestException, Injectable } from '@nestjs/common';
import { Coupon } from '../entity/coupon.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { ICouponRepository } from './coupon.repository.interface';
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

  async createDiscount(coupon: Partial<Coupon>): Promise<Coupon> {
    try {
      let couponEntity = await this.findOne({
        productName: coupon.productName,
      });

      if (!couponEntity) {
        couponEntity = this.create(coupon);
        await this.em.persist(couponEntity).flush();
      }

      return couponEntity;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async updateDiscount(coupon: Partial<Coupon>): Promise<Coupon> {
    try {
      const couponEntity = await this.findOne({
        id: coupon.id,
      });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      wrap(couponEntity).assign(coupon);
      await this.em.persist(couponEntity).flush();
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

      this.em.removeAndFlush(couponEntity);
      return couponEntity && true;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}

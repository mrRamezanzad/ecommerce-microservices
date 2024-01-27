import { Injectable } from '@nestjs/common';
import { Coupon } from '../entity/coupon.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { ICouponRepository } from './coupon.repository.interface';
import { wrap } from '@mikro-orm/core';
import { RpcException } from '@nestjs/microservices';

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
        throw new RpcException(`Not found coupon with name: ${productName}`);
      }

      return couponEntity;
    } catch (err) {
      throw new RpcException(err);
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
      throw new RpcException(err);
    }
  }

  async updateDiscount(coupon: Partial<Coupon>): Promise<Coupon> {
    try {
      const couponEntity = await this.findOne({
        id: coupon.id,
      });

      if (!couponEntity) {
        throw new RpcException(`Not found coupon with Id: ${coupon.id}`);
      }

      wrap(couponEntity).assign(coupon);
      await this.em.persist(couponEntity).flush();
      return couponEntity;
    } catch (err) {
      throw new RpcException(err);
    }
  }

  async deleteDiscount(productName: string): Promise<boolean> {
    try {
      const couponEntity = await this.findOne({ productName });

      if (!couponEntity) {
        throw new RpcException(`Not found coupon with name: ${productName}`);
      }

      this.em.removeAndFlush(couponEntity);
      return couponEntity && true;
    } catch (err) {
      throw new RpcException(err);
    }
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Coupon } from '../entity/coupon.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { CreateDiscountDto } from '../dtos/createDiscount.dto';
import { ICouponRepository } from './coupon.repository.interface';
import { UpdateDiscountDto } from '../dtos/updateDiscount.dto';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class CouponRepository implements ICouponRepository {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: EntityRepository<Coupon>,
    private readonly entityManager: EntityManager,
  ) {}

  async getDiscount(productName: string): Promise<Coupon> {
    try {
      const couponEntity = await this.couponRepository.findOne({ productName });

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
      let couponEntity = await this.couponRepository.findOne({
        productName: coupon.productName,
      });

      if (!couponEntity) {
        couponEntity = this.couponRepository.create(coupon);
        await this.entityManager.persist(couponEntity).flush();
      }

      return couponEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async updateDiscount(coupon: UpdateDiscountDto): Promise<Coupon> {
    try {
      const couponEntity = await this.couponRepository.findOne({
        id: coupon.id,
      });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      wrap(couponEntity).assign(coupon);
      await this.entityManager.persist(couponEntity).flush();
      return couponEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async deleteDiscount(productName: string): Promise<boolean> {
    try {
      const couponEntity = await this.couponRepository.findOne({ productName });

      if (!couponEntity) {
        throw new BadRequestException();
      }

      this.entityManager.removeAndFlush(couponEntity);
      return couponEntity && true;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}

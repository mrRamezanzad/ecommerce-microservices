import { Injectable, Logger } from '@nestjs/common';
import { ICoupon } from '../entity/coupon.entity.interface';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Coupon } from '../entity/coupon.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { CreateDiscountDto } from '../dtos/createDiscount.dto';
import { ICouponRepository } from './coupon.repository.interface';
import { UpdateDiscountDto } from '../dtos/updateDiscount.dto';

@Injectable()
export class CouponRepository implements ICouponRepository {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: EntityRepository<Coupon>,
    private readonly entityManager: EntityManager,
  ) {}

  async getDiscount(productName: string): Promise<ICoupon> {
    return;
  }

  async createDiscount(coupon: CreateDiscountDto): Promise<ICoupon> {
    const couponEntity = this.couponRepository.create(coupon);
    
    this.entityManager.persist(couponEntity).flush();
    return couponEntity;
  }

  updateDiscount(coupon: UpdateDiscountDto): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  deleteDiscount(productName: string): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

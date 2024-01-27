import {
  Coupon,
  DISCOUNT_PACKAGE_NAME,
  DISCOUNT_SERVICE_NAME,
  DiscountServiceClient,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscountService implements OnModuleInit {
  private discountService: DiscountServiceClient;

  constructor(
    @Inject(DISCOUNT_PACKAGE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.discountService = this.client.getService<DiscountServiceClient>(
      DISCOUNT_SERVICE_NAME,
    );
  }

  async getDiscount(productName: string): Promise<Coupon> {
    const subsciption = this.discountService.getDiscount({ productName });
    return lastValueFrom(subsciption);
  }
}

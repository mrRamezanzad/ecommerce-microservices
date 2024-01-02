import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService {
  getHello(): string {
    return 'Hello World!';
  }
}

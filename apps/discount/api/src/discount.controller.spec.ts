import { Test, TestingModule } from '@nestjs/testing';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';

describe('DiscountController', () => {
  let discountController: DiscountController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiscountController],
      providers: [DiscountService],
    }).compile();

    discountController = app.get<DiscountController>(DiscountController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(discountController.getHello()).toBe('Hello World!');
    });
  });
});

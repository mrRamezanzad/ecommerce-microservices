import { CouponRepository } from './coupon.repository';
import { ICouponRepository } from './coupon.repository.interface';

describe('CouponRepository', () => {
  let couponRepository: ICouponRepository;

  beforeEach(async () => {
    couponRepository = new CouponRepository();
  });

  afterEach(jest.clearAllMocks);

  it('should implement all required methods of ICouponRepository', () => {
    expect(couponRepository.getDiscount).toBeDefined();
    expect(couponRepository.createDiscount).toBeDefined();
    expect(couponRepository.updateDiscount).toBeDefined();
    expect(couponRepository.deleteDiscount).toBeDefined();
  });
});

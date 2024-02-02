import { Order, OrderProps } from './order';

describe('Order Entity', () => {
  it("should create and entity with it's props", () => {
    const orderProps = {
      addressLine: '',
      cardName: '',
      cardNumber: '',
      country: '',
      cvv: '',
      emailAddress: '',
      expiration: '',
      firstName: '',
      lastName: '',
      paymentMethod: 1,
      state: '',
      totalPrice: 2000,
      username: 'test',
      zipCode: '',
    };
    const order = Order.create(orderProps);

    expect(order).toBeDefined();
  });

  it('should compare orders with each other and return correct result', () => {
    const orderProps = {
      addressLine: '',
      cardName: '',
      cardNumber: '',
      country: '',
      cvv: '',
      emailAddress: '',
      expiration: '',
      firstName: '',
      lastName: '',
      paymentMethod: 1,
      state: '',
      totalPrice: 2000,
      username: 'original',
      zipCode: '',
    };
    const copyOfOrderProps = {
      ...orderProps,
      username: 'copy',
      totalPrice: 1000,
    };

    const order = Order.create(orderProps);
    const copyOfOrder = Order.create(copyOfOrderProps);

    expect(order.equals(copyOfOrder)).toBeFalsy();
  });
});

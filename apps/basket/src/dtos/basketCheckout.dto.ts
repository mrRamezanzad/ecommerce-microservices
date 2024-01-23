import { IsNumber, IsString } from 'class-validator';

export class BasketCheckout {
  @IsString()
  username: string;

  @IsNumber()
  totalPrice: number;

  // Billing Address
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  emailAddress: string;

  @IsString()
  addressLine: string;

  @IsString()
  country: string;

  @IsString()
  state: string;

  @IsString()
  zipCode: string;

  // Payment
  @IsString()
  cardName: string;

  @IsString()
  cardNumber: string;

  @IsString()
  expiration: string;

  @IsString()
  cvv: string;

  @IsNumber()
  paymentMethod: number;
}

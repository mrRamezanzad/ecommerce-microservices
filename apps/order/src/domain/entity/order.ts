import { Entity } from '../common/entity';

export interface OrderProps {
  username: string;
  totalPrice: number;

  // Billing Address
  firstName: string;
  lastName: string;
  emailAddress: string;
  addressLine: string;
  country: string;
  state: string;
  zipCode: string;

  // Payment
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
  paymentMethod: number;
}

export class Order extends Entity<OrderProps> {
  private constructor(props: OrderProps) {
    super(props);
  }

  static create(props: OrderProps) {
    return new Order(props);
  }

  get username(): string {
    return this.props.username;
  }

  get totalPrice(): number {
    return this.props.totalPrice;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get emailAddress(): string {
    return this.props.emailAddress;
  }

  get addressLine(): string {
    return this.props.addressLine;
  }

  get country(): string {
    return this.props.country;
  }

  get state(): string {
    return this.props.state;
  }

  get zipCode(): string {
    return this.props.zipCode;
  }

  get cardName(): string {
    return this.props.cardName;
  }

  get cardNumber(): string {
    return this.props.cardNumber;
  }

  get expiration(): string {
    return this.props.expiration;
  }

  get cvv(): string {
    return this.props.cvv;
  }

  get paymentMethod(): number {
    return this.props.paymentMethod;
  }
}

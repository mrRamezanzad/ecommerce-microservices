import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'orders',
  orderBy: { id: 'ASC' },
})
export class Order {
  @PrimaryColumn({
    type: 'uuid',
    nullable: false,
  })
  id: string;

  @Column({
    type: String,
    nullable: false,
  })
  username: string;

  @Column({
    type: Number,
    nullable: false,
  })
  totalPrice: number;

  @Column({
    type: String,
  })
  firstName: string;

  @Column({
    type: String,
  })
  lastName: string;

  @Column({
    type: String,
  })
  emailAddress: string;

  @Column({
    type: String,
  })
  addressLine: string;

  @Column({
    type: String,
  })
  country: string;

  @Column({
    type: String,
  })
  state: string;

  @Column({
    type: String,
  })
  zipCode: string;

  @Column({
    type: String,
  })
  cardName: string;

  @Column({
    type: String,
  })
  cardNumber: string;

  @Column({
    type: String,
  })
  expiration: string;

  @Column({
    type: String,
  })
  cvv: string;

  @Column({
    type: 'tinyint',
  })
  paymentMethod: number;
}

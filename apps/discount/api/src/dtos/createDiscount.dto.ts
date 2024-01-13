import { IsString } from 'class-validator';

export class CreateDiscountDto {
  @IsString()
  description: string;

  @IsString()
  amount: number;

  @IsString()
  productName: string;
}

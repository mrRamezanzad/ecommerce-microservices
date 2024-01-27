import { IsNumber, IsString } from 'class-validator';

export class BasketItemDto {
  @IsNumber()
  quantity: number;

  @IsString()
  color: string;

  @IsNumber()
  price: number;

  @IsString()
  productId: string;

  @IsString()
  productName: string;
}

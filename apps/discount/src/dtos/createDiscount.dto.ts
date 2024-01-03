import {IsString} from "@nestjs/class-validator";

export class CreateDiscountDto {
  @IsString()
  description: string;

  @IsString()
  amount: number;

  @IsString()
  productName: string;
}

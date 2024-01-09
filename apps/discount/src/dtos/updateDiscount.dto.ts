import { PartialType } from '@nestjs/swagger';
import { CreateDiscountDto } from './createDiscount.dto';
import { IsString } from '@nestjs/class-validator';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {
  @IsString()
  id: string;
}

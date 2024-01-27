import { IsArray, IsObject, IsString, ValidateNested } from 'class-validator';
import { BasketItemDto } from './basketItem.dto';
import { Type } from 'class-transformer';

export class UpdateBasketDto {
  @IsString()
  username: string;

  @Type(() => BasketItemDto)
  @ValidateNested({ each: true })
  items: BasketItemDto[];
}

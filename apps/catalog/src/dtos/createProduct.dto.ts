import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  summary: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  imageFile?: string;

  @IsNumber()
  price: number;
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Product } from './schema/product.schema';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/createProduct.dto';

@ApiTags('catalog')
@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.catalogService.createProduct(createProductDto);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.catalogService.getProducts();
  }
}

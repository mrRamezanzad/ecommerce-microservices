import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Product } from './schema/product.schema';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

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

  @Get(':id')
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.catalogService.getProduct(id);
  }

  @Get('productName/:name')
  getProductByName(@Param('name') name: string): Promise<Product> {
    return this.catalogService.getProductByName(name);
  }

  @Get('productCategory/:category')
  getProductByCategory(@Param('category') category: string): Promise<Product> {
    return this.catalogService.getProductByCategory(category);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<boolean> {
    return this.catalogService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<boolean> {
    return this.catalogService.deleteProduct(id);
  }
}

import { Injectable } from '@nestjs/common';
import { ProductRespository } from './repository/product.repository';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dtos/createProduct.dto';

@Injectable()
export class CatalogService {
  constructor(private readonly productRepository: ProductRespository) {}

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.create(createProductDto);
  }

  getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}

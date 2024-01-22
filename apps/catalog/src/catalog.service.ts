import { Injectable } from '@nestjs/common';
import { ProductRespository } from './repository/product.repository';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dtos/createProduct.dto';
import { Types } from 'mongoose';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class CatalogService {
  constructor(private readonly productRepository: ProductRespository) {}

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.create(createProductDto);
  }

  getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  getProduct(id: string): Promise<Product> {
    return this.productRepository.findOne({
      _id: new Types.ObjectId(id),
    });
  }

  getProductByName(name: string): Promise<Product> {
    return this.productRepository.findOne({
      name,
    });
  }

  getProductByCategory(category: string): Promise<Product> {
    return this.productRepository.findOne({
      category,
    });
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<boolean> {
    const result = await this.productRepository.updateOne(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: updateProductDto,
      },
    );

    return result.modifiedCount > 0;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await this.productRepository.deleteOne({
      _id: new Types.ObjectId(id),
    });
    return result.deletedCount === 1;
  }
}

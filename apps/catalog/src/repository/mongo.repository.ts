import { UpdateOptions } from '@mikro-orm/core';
import { DeleteOptions, DeleteResult, UpdateResult } from 'mongodb';
import {
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';

export abstract class MongoRepository<T> {
  constructor(protected readonly model: Model<T>) {}

  protected async create(document: T): Promise<T> {
    return await this.model.create(document);
  }

  protected async findOne(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T> {
    return await this.model.findOne(filter, projection, options);
  }

  protected async findAll(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T[]> {
    return await this.model.find(filter, projection, options);
  }

  protected async updateOne(
    filter: FilterQuery<T>,
    update?: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: UpdateOptions<T>,
  ): Promise<UpdateResult> {
    return await this.model.updateOne(filter, update, options);
  }

  protected async deleteOne(
    filter: FilterQuery<T>,
    options: DeleteOptions,
  ): Promise<DeleteResult> {
    return await this.model.deleteOne(filter, options);
  }
}

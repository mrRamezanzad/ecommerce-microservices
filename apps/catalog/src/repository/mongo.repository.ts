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
  constructor(public readonly model: Model<T>) {}

  public create(document: T): Promise<T> {
    return this.model.create(document);
  }

  public findOne(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T> {
    return this.model.findOne(filter, projection, options);
  }

  public findAll(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T[]> {
    return this.model.find(filter, projection, options);
  }

  public updateOne(
    filter: FilterQuery<T>,
    update?: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: UpdateOptions<T>,
  ): Promise<UpdateResult> {
    return this.model.updateOne(filter, update, options);
  }

  public deleteOne(
    filter: FilterQuery<T>,
    options?: DeleteOptions,
  ): Promise<DeleteResult> {
    return this.model.deleteOne(filter, options);
  }
}

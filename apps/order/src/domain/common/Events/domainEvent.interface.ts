import { UniqueEntityID } from '../uniqueEntityid';

export interface IDomainEvent {
  dateTimeOccured: Date;
  getAggregateId(): UniqueEntityID;
}

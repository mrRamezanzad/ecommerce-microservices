import { Order } from '../entity/order';

export interface IOrderRepository {
  getOrdersByUsername(username: string): Order[];
}

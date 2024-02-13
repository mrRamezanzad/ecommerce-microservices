import { Injectable } from '@nestjs/common';
import { OrderRepository } from './infrustructure/typeorm/repository/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  getOrdersByUserName(username: string): Promise<any[]> {
    return this.orderRepository.getOrdersByUsername(username);
  }
}

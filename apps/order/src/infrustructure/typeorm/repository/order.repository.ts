import { Order as OrderSchema } from '../entity/order.entity';
import { IOrderRepository } from '../../../domain/repository/oreder.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class OrderRepository implements IOrderRepository<OrderSchema> {
  constructor(
    @InjectRepository(OrderSchema)
    private readonly orderRepository: Repository<OrderSchema>,
  ) {}

  async getOrdersByUsername(username: string): Promise<OrderSchema[]> {
    return this.orderRepository.find({ where: { username } });
  }
}

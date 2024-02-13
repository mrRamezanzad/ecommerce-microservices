import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { Order as OrderSchema } from './infrustructure/typeorm/entity/order.entity';

@ApiTags('order')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':username')
  getOrdersByUserName(
    @Param('username') username: string,
  ): Promise<OrderSchema[]> {
    return this.orderService.getOrdersByUserName(username);
  }
}

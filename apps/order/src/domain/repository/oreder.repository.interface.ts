export interface IOrderRepository<TResult> {
  getOrdersByUsername(username: string): TResult[] | Promise<TResult[]>;
}

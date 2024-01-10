/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'discount';

export interface GetDiscountRequest {
  productName: string;
}

export interface Coupon {
  id: string;
  productName: string;
  description: string;
  amount: number;
}

export interface CreateDiscountRequest {
  productName: string;
  description: string;
  amount: number;
}

export interface UpdateDiscountRequest {
  id: string;
  productName?: string | undefined;
  description?: string | undefined;
  amount?: number | undefined;
}

export interface DeleteDiscountRequest {
  productName: string;
}

export interface DeleteDiscountResponse {
  success: boolean;
}

export const DISCOUNT_PACKAGE_NAME = 'discount';

export interface DiscountServiceClient {
  getDiscount(request: GetDiscountRequest): Observable<Coupon>;

  createDiscount(request: CreateDiscountRequest): Observable<Coupon>;

  updateDiscount(request: UpdateDiscountRequest): Observable<Coupon>;

  deleteDiscount(
    request: DeleteDiscountRequest,
  ): Observable<DeleteDiscountResponse>;
}

export interface DiscountServiceController {
  getDiscount(
    request: GetDiscountRequest,
  ): Promise<Coupon> | Observable<Coupon> | Coupon;

  createDiscount(
    request: CreateDiscountRequest,
  ): Promise<Coupon> | Observable<Coupon> | Coupon;

  updateDiscount(
    request: UpdateDiscountRequest,
  ): Promise<Coupon> | Observable<Coupon> | Coupon;

  deleteDiscount(
    request: DeleteDiscountRequest,
  ):
    | Promise<DeleteDiscountResponse>
    | Observable<DeleteDiscountResponse>
    | DeleteDiscountResponse;
}

export function DiscountServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getDiscount',
      'createDiscount',
      'updateDiscount',
      'deleteDiscount',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('DiscountService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('DiscountService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const DISCOUNT_SERVICE_NAME = 'DiscountService';

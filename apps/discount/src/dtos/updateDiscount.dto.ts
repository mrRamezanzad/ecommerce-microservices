import { PartialType } from "@nestjs/swagger";
import { CreateDiscountDto } from "./createDiscount.dto";

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {
}

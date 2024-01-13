import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'products',
  autoIndex: true,
})
export class Product {
  @Prop({
    type: String,
    index: true,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  category: string;

  @Prop({
    type: String,
    required: false,
  })
  description?: string;

  @Prop({
    type: String,
    required: false,
  })
  summary?: string;

  @Prop({
    type: String,
    required: false,
  })
  imageFile?: string;

  @Prop({
    type: String,
    required: true,
  })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

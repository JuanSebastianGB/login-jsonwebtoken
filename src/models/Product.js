import { Schema, model } from 'mongoose';

const product = {
  name: String,
  category: String,
  price: Number,
  imgUrl: String
};
const productSchema = new Schema(product, { timestamps: true, versionKey: false });

export default model('Product', productSchema);

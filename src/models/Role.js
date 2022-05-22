import { Schema, model } from 'mongoose';

const role = {
  name: String
};

const roleSchema = new Schema(role, { timestamps: true, versionKey: false });

export default model('Role', roleSchema);

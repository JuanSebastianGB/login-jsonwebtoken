import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const user = {
    username: String,
    password: String,
    email: String,
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
}

const userSchema = new Schema(user, { timestamps: true, versionKey: false });

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}


export default model('User', userSchema);
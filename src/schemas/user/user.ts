import { Schema, model } from 'mongoose';
import { IUser } from '../../interface/IUser';

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
  });

  export const userModel = model<IUser>('User', userSchema);
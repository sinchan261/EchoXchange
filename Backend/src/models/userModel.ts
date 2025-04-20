import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  token:string
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
 password: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  token:{
    type:String,

  }
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);

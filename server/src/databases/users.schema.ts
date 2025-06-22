import { Document, Types } from "mongoose";
import { Schema, Prop, SchemaFactory, } from "@nestjs/mongoose";
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ required: true, default: 'https://i.imgur.com/4e2b1aH.png' }) // Default profile photo URL
  profilePhoto: string;

  @Prop({ required: true })
  accessToken: string; // Uncomment if you want to store access tokens

  @Prop({ required: true })
  isLoggedIn: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;

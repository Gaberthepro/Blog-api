import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop()
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const PostSchema = SchemaFactory.createForClass(Users);

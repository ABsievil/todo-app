import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoStatus } from '../enums/todo-status.enum';
import { TodoPriority } from '../enums/todo-priority.enum';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, enum: TodoStatus })
  status: TodoStatus;

  @Prop({ required: true, enum: TodoPriority })
  priority: TodoPriority;

  @Prop({ required: true })
  dateTime: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo); 
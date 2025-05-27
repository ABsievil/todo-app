import { IsString, IsEnum, IsDate, IsNotEmpty } from 'class-validator';
import { TodoStatus } from '../enums/todo-status.enum';
import { TodoPriority } from '../enums/todo-priority.enum';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: TodoStatus;

  @IsEnum(TodoPriority)
  @IsNotEmpty()
  priority: TodoPriority;

  @IsDate()
  @IsNotEmpty()
  dateTime: Date;
} 
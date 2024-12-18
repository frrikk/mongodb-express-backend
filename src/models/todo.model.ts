import mongoose, { Document, Model } from "mongoose";
import { TodoSchema } from "../schemas/todo.schema";

const todoSchema = new mongoose.Schema<TodoSchema>(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Todo: Model<TodoSchema> = mongoose.model<TodoSchema>(
  "Todo",
  todoSchema,
);

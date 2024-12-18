import { Todo } from "../models/todo.model";
import { Request, Response } from "express";

export const getTodos = async (_: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  console.log(req);
  if (!req.body) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  if (!req.body.id) {
    res.status(404).json({ error: "No ID found" });
  }

  res.status(200).json(req.body);

  const todo = await Todo.deleteOne(req.body.id);
};

import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todo.controller";

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;

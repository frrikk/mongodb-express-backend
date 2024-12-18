import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().nonempty(),
  isCompleted: z.boolean().optional(),
});

export type TodoSchema = z.infer<typeof createTodoSchema>;

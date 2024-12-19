import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().nonempty(),
  passwordHash: z.string().nonempty(),
});

export type UserSchema = z.infer<typeof createUserSchema>;

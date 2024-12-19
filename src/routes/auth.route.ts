import { Router } from "express";
import { createUser, getUsers } from "../controllers/auth.controller";
import { validate } from "../middleware/validate";
import { createUserSchema } from "../schemas/user.schema";

const router = Router();

router.post("/", validate(createUserSchema), createUser);
router.get("/", getUsers);

export { router as authRoute };

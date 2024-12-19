import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { UserSchema } from "../schemas/user.schema";

interface CreateUserRequest extends Request {
  body: UserSchema;
}

export const createUser = async (req: CreateUserRequest, res: Response) => {
  if (!req.body) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { username, passwordHash } = req.body;

  const hash = await bcrypt.hash(passwordHash, 10);
  const user = await User.create({ username, passwordHash: hash });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 3600 * 1000,
  });

  res.status(201).json({ user, token, msg: "User created" });
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  const safeUsers = users.map((user) => {
    return {
      username: user.username,
    };
  });

  res.status(200).json(safeUsers);
};

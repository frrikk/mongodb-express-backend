import mongoose, { Document, Model } from "mongoose";
import { UserSchema } from "../schemas/user.schema";

const userSchema = new mongoose.Schema<UserSchema>(
  {
    username: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

export const User: Model<UserSchema> = mongoose.model<UserSchema>(
  "User",
  userSchema,
);

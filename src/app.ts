import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { authRoute, todoRoute } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/todos", todoRoute);
app.use("/api/auth", authRoute);

const start = async () => {
  await connectDB();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start().catch((err) => {
  console.error("Failed to start server: ", err);
});

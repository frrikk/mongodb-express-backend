import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.routes";
import connectDB from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/todos", todoRoutes);

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

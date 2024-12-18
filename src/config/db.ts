import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
  }
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;

import mongoose, { mongo } from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

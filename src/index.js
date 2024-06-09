import app from "./app.js";
import { connectDB } from "./db.js";
import { config } from "dotenv";

config();

export const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

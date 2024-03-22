import express from "express";
import { PORT, MONGODB_URL } from "./env-config.js";
import mongoose from "mongoose";
import controller from "./controllers/controller.js";
import bodyParser from "body-parser";
import router from "./routes/route.js";

const app = express();

// middlewares
app.use(bodyParser.json());

// database
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }  
}
connectDB();

// routes
app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

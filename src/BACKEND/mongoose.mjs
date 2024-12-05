import mongoose from "mongoose";
import api from "./api/api.mjs";

const mongoDB = "mongodb://localhost:27017/lms";

const mongooseDB = async (app) => {
  try {
    await mongoose.connect(mongoDB);
    api(app);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default mongooseDB;

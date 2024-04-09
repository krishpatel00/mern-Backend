import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection failed", err);
  });

/*
import express from "express";

const app = express()(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}`);
    app.on("error", () => {
      console.log("error", error);
      throw error;
    });
    app.listner(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw err;
  }
})();

*/

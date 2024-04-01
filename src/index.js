//require("dotenv").config({ path: "../.env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

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

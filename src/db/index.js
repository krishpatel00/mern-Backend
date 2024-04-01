import mongoose from "mongoose";

import { DB_Name } from "../constants.js";
// import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(
      `\n MongoDb connected !! DB HOST :${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection error", error);
    process.exit(1);
  }
};
export default connectDB;

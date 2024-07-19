import mongoose from "mongoose";
import logger from "../utils/helpers/logger";

const connectDB = async () => {

  let dbUrl = "mongodb://127.0.0.1:27017/repairotek_db";
  // dbUrl= "mongodb+srv://moderator_user:rPsV2LGj3teQ52ku@vegatekhub.2mvg88h.mongodb.net/repairoTek_db_dev?retryWrites=true&w=majority&appName=VegaTekHub"
 
  // if (process.env.ENV_MODE) {
  //   dbUrl =
  //     process.env.ENV_MODE === "production"
  //       ? process.env.DB_URL!
  //       : process.env.DB_URL_DEV!;
  // }

  try {
    mongoose.set("strictQuery", false);
    const dbConnection = await mongoose.connect(dbUrl);
    logger.info(
      `Successfully connected to MongoDB. 
       Host: ${dbConnection.connection.host} 
       dbName: ${dbConnection.connection.db.databaseName}`
    );
  } catch (error:any) {
    logger.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;

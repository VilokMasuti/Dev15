import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
const dbConnect = async () => {
  cached.promise = mongoose
    .connect(MONGODB_URI, {
      dbName: "devflow",
    })
    .then((result) => {
      console.log("Connected to MongoDB");
      return result;
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    });
  return cached.conn;
};

export default dbConnect;

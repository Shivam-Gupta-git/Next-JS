import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/nextProject`);
    console.log("MongoDB Connection Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};
export default connectDB;

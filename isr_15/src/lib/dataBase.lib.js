import mongoose from "mongoose";

export const dataBase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/nextProject`);
    console.log("database connection successfully");
  } catch (error) {
    console.error("database connection failed", error);
    throw error;
  }
};

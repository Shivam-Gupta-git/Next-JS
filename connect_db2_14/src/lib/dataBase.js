import mongoose from "mongoose";

export const dataBase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return; // already connected
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/nextProject`);
    console.log("Database connction successful");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

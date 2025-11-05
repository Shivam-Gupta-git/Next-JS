import mongoose from "mongoose";

export const database = async () => {
  try {
    if(mongoose.connection.readyState >= 1){
      return
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/nextProject`)
    console.log("mongodb connection successful")
  } catch (error) {
    console.error("mongodb connection failed", error)
  }
}
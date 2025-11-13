import mongoose from "mongoose";

export const database = async () => {
  try {
    if(mongoose.connection.readyState >= 2){
      return
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/nextJS`)
    console.log("database connection successful")
  } catch (error) {
    // console.error("database connection failed", error)
  }
}
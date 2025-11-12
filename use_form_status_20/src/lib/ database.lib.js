import mongoose from "mongoose";

export const dataBase = async () => {
  try {
    if(mongoose.connection.readyState >= 1){
      return
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/nextJS`)
    console.log("dataBase Connection seccessful")
  } catch (error) {
    console.error("dataBase connention failed")
  }
}
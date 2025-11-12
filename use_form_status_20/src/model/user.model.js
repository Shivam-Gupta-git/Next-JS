import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
  fullName: {
    type: String, 
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: Number, String,
    require: true,
    unique: true
  },
  contact: {
    type : Number,
    require: true
  }
},{minimize: false})

export const UserDetails = mongoose.models.UserDetails || mongoose.model("UserDetails", userScheema)
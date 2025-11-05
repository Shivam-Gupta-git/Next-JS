import mongoose from "mongoose";

const contactScheema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  }, 
  message: {
    type: String,
    require: true
  }
},{minimize: false})

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactScheema)


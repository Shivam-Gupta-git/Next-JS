import mongoose from "mongoose";

const userDetailsScheema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "Name is required"]
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
    lowerCase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  phone: {
    type: String,
    match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zip: { type: String },
  },

},{ timestamps: true }
)

export const User = mongoose.models.User || mongoose.model("User", userDetailsScheema)
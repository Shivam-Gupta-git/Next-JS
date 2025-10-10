import mongoose from "mongoose";

const doctorScheema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  address: {
    street: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    pinCode: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  department: {
    type: String,
    require: true,
  },
  specialization: {
    type: Array,
    require: true,
  },
  qualification: {
    type: Array,
    require: true,
  },
  experience: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
  },
  availableDays: {
    type: Array,
    require: true,
  },
});
export const Doctor =
  mongoose.models.Doctor || mongoose.model("Doctor", doctorScheema);

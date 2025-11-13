import mongoose from "mongoose";

const addHospitalScheema = new mongoose.Schema({
  hospitalName: {
    type: String,
    require: true
  }, 
  country: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  department: {
    type: String,
    require: true
  },
  establishedYear: {
    type: Number,
    require: true
  }
}, {timestamps: true})

const AddHospital = mongoose.models?.AddHospital || mongoose.model("AddHospital", addHospitalScheema);

export default AddHospital;
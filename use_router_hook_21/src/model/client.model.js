import mongoose from "mongoose";

const employeScheema = new mongoose.Schema({
fullName: {
 type: String,
 require: true
},
 email: {
  type: String,
  require: true,
  unique: true
},
 phone: {
  type: Number,
  require: true,
  unique: true
},
 gender: {
  type: String,
  require: true
},
 employeeId: {
  type: String,
  require: true,
  unique: true
}, 
 department: {
  type: String,
  require: true
},
 salary: {
  type: Number,
  require: true
 }
},{timestamps: true})

export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeScheema)
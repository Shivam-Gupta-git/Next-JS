"use server"

import { database } from "@/lib/database"
import { Employee } from "@/model/client.model"
import { redirect } from "next/navigation"

export const formActionData = async (previousState, formData) => {
const {fullName, email, phone, gender, employeeId, department, salary} = Object.fromEntries(formData.entries())

// console.log(fullName, email, phone, gender, employeeId, department, salary)
 try {
  await database()
  const newEmployee = new Employee({
    fullName,
    email,
    phone,
    gender,
    employeeId,
    department,
    salary
  })
  await newEmployee.save()
  console.log("Employee information save successfull")
      // return{success: true, message: "form submit successfully"}
      redirect("/")
 } catch (error) {
  if(error.message === "NEXT_REDIRECT") throw error
  return  {success: false, message: "error while submit", }
 }
}
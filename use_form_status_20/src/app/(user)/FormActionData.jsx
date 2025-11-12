"use server"

import { dataBase } from "@/lib/ database.lib"
import { UserDetails } from "@/model/user.model"

export const FormActionData = async (previousState, formData) => {
  const {firstName, lastName, email, password, contact} = Object.fromEntries(formData.entries())

  try {
    await dataBase()
    const newUser = new UserDetails({
      firstName,
      lastName,
      email,
      password,
      contact
    })

    await newUser.save()
    console.log("User Save Successfully")
    return{success: true, message: "form submit successfully"}
  } catch (error) {
    console.error("user Save failed", error)
    return{success: false, message: "error while submit "}
  }
}
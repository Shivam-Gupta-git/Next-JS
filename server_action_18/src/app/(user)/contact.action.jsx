"use server"

import { dataBase } from "@/lib/database.lib"
import { Contact } from "@/model/contact.model"

export const contactAction = async (formData) => {
  // console.log(formData.get("fullName"))
  const {fullName, email, message} = Object.fromEntries(formData.entries())
  console.log(fullName, email, message)

  try {
    await dataBase()
    const newContact = new Contact({
      fullName,
      email,
      message
    })
    await newContact.save()
    console.log("contact save successfully", newContact)
  } catch (error) {
    console.error("contact save unsuccessfull", error)
  }
}
"use server"

import { database } from "@/lib/database.lib"
import { AddHospital } from "@/model/AddHospital.model"
import { revalidatePath } from "next/cache"

export const addHospitalAction = async (previousState, formData) => {
 const {hospitalName, country, city, state, department, establishedYear} = Object.fromEntries(formData.entries())

//  console.log(hospitalName, country, city, state, department, establishedYear)

try {
  await database()
  const newAddHospital = new AddHospital({
    hospitalName,
    country, 
    city,
    state,
    department,
    establishedYear 
  })
 await newAddHospital.save()
 console.log("hospital data save successfully")
 revalidatePath("/hospital")
 return{success: true, message: "form submit successfully"}
} catch (error) {
  console.error("hospital data save faled". error)
}
}
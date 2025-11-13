import { database } from "@/lib/database.lib"
import AddHospital from "@/model/AddHospital.model"

import { useEffect } from "react"

function HospitalDetails() {
  
  let hospitalData = []
  const getHospitalData = async () => {
    try {
      await database()
      const rawData = await AddHospital.find({})

      hospitalData = JSON.parse(JSON.stringify(rawData))
      console.log("get hospital data successfully")
    } catch (error) {
      console.error("get hospital data failed", error)
    }
  }

  useEffect(() => {
    getHospitalData()
  }, [])

  console.log(hospitalData)
  return (
    <div>HospitalDetails</div>
  )
}

export default HospitalDetails
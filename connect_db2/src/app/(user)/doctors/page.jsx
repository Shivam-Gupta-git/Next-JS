import { Doctor } from "@/model/Doctordetails.model"

const DoctorDetails = async () => {
  let doctorsData = []
  try {
    doctorsData = await Doctor.find({})
    console.log("data fetching successfully", doctorsData.length)
  } catch (error) {
    console.log("data fetching failed", error)
  }
  // console.log("doctorDetails", doctorsData)
 return(
  <h1>Doctor Details</h1>
 )
}
export default DoctorDetails
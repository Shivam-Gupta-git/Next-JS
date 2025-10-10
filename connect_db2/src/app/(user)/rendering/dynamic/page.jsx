import { Doctor } from "@/model/Doctordetails.model"
export const dynamic = "force-dynamic"

const doctorData = []
try {
  doctorData = await Doctor.find({})
  console.log("data fetching successful in dynamic page")
} catch (error) {
  console.error("data fetching failed in dynamic page", error)
}
const DynamicRendering = async () => {
  return(
    <div>
      <h1>Dynamic Rendering Page</h1>
      {
        doctorData.map((item, index) => (
          <div key={index}>
            <p>{item.firstName}</p>
          </div>
        ))
      }
    </div>
  )
}
export default DynamicRendering

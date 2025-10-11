import { dataBase } from "@/lib/dataBase"
import { Doctor } from "@/model/Doctordetails.model"

export const dynamic = "force-dynamic"

const DynamicRendering = async () => {
  let doctorData = []
  try {
    await dataBase()
    doctorData = await Doctor.find({})
    console.log("data fetching successful in dynamic page")

  } catch (error) {
    console.error("data fetching failed in dynamic page", error)
    return <div>Failed to fetch data</div>
  }

  return (
    <div>
      <h1>Dynamic Rendering Page</h1>
      {doctorData.map((item, index) => (
        <div key={index}>
          <p>{item.firstName}</p>
        </div>
      ))}
    </div>
  )
}

export default DynamicRendering
import { Doctor } from "@/model/Doctordetails.model"

const StaticRendering = async () => {
  console.log("Static Page")
  let doctorData = []
  try {
    doctorData = await Doctor.find({})
    console.log("data fetching successfully", doctorData.length)
  } catch (error) {
    console.error("data fetching failed", error)
  }
  return(
    <div>
      <h1>Static Rendering Page</h1>
       <div>
        {doctorData.map((items, index) => (
          <div key={index}>
           <p>{items.firstName}</p>
          </div>
        ))}
       </div>
    </div>
  )
}
export default StaticRendering
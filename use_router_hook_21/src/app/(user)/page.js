import { database } from "@/lib/database";
import { Employee } from "@/model/client.model";
import { redirect } from "next/navigation";
import AddEmployeButton from "../components/AddEmployeButton";

export default async function Home() {
  let employeeData = []
  try {
    await database()
    const rawData = await Employee.find({})

    employeeData = JSON.parse(JSON.stringify(rawData))
    console.log("employee data fetching successfull")
  } catch (error) {
    console.error("employee data fetch failed", error)
  }
  // console.log(employeeData)
  return (
    <div className="h-screen w-full bg-amber-100 flex flex-col items-center">
     <div className="h-[100px] w-full bg-amber-400 flex items-center p-2 gap-2">
      <p className="text-3xl font-bold text-black">Employee Dashboard</p>
     <AddEmployeButton/>
     </div>
   
     {
      employeeData.map((data, index) => (
        <div key={index} className="w-[90%] h-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all p-5 mt-2">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Name: {data.fullName}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Email ID: </span>{data.email}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Phone: </span>+91   {data.phone}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Gender: </span>   {data.gender}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Employee ID: </span>   {data.employeeId}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Department:</span>   {data.department}</h1>
        <h1 className="text-sm  text-gray-500 mb-1"><span className="text-gray-800">Salary: </span>   {data.salary}</h1>
        </div>
      ))
     }
     
    </div>
   
  );
}

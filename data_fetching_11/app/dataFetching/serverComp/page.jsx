import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";

const serverDataFetching = async (props) => {

  const searchParams = await props.searchParams
  const userName = searchParams.name

  const URl = `https://api.genderize.io/?name=${userName}`
  const response = await fetch(URl)
  const userData = await  response.json()

  const confidencePercentage = userData.probability * 100;
  const isMale = userData.gender === "male"

  if(!userName){
    return(
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
      <div className="w-[400px] h-[150px] bg-blue-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
        <h1 className="text-2xl text-gray-700 font-medium">No Name Provided</h1>
        <p className="text-[12px]">Please add ?name=userName to the URL</p>
      </div>
    </div>
    )
  }

  return(
    <div>
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[350px]  border rounded bg-white border-gray-200 shadow-sm relative px-2 py-5">
          <div className="w[100%] flex flex-col items-center justify-center ">
            <div className={`w-[100px] h-[100px] border border-gray-200 rounded-full shadow-sm mt-2 flex items-center justify-center ${isMale ? "bg-blue-300" : "bg-pink-300"}`}><CgProfile className="text-4xl text-gray-100"/></div>
            <h1 className="text-2xl font-bold text-gray-700 mt-1">{userData.name}</h1>
            <div className={`h-[35px] w-[100px] border border-gray-200 rounded-full mt-2  ${isMale ? "bg-blue-300" : "bg-pink-300"} flex flex-row items-center justify-center gap-1`}>
              <div className={`h-3 w-3 border rounded-full ${isMale ? "bg-blue-600 border-blue-700" : "bg-pink-600 border-pink-700"}`}></div>
              <p className={`${isMale ? "text-blue-700" : "text-pink-700"}`}>{userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}</p>
            </div>
            <div className="w-full h-[50px] border border-gray-100 mt-3 bg-gray-100 rounded-xl px-2">
              <div className="w-full flex flex-row justify-between ">
                <div className="flex flex-row items-center gap-0.5">
                <CiStar className="text-xl"/>
                <p>Confidence</p>
                </div>
                <p>{confidencePercentage}</p>
              </div>
              <div className={`h-3 border border-gray-200 mt-1 rounded-full ${isMale ? "bg-linear-65 from-blue-300 to-blue-600" : "bg-linear-65 from-pink-300 to-pink-600"}`}
              style={{width: `${confidencePercentage}%`}}></div>
            </div>
            <div className="w-full h-[50px] border border-gray-100 mt-3 bg-gray-50 rounded-xl px-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-0.5">
              <SlGraph className="text-xl"/>
              <p>Data Sample Size</p>
              </div>
              <p className="font-bold">{userData.count}</p>
            </div>
            <div className="w-full h-[50px] border-yellow-300 border mt-3 bg-yellow-100 rounded-xl px-2 flex flex-row items-center gap-0.5">
            <HiOutlineUsers className="text-[14px] font-bold"/>
            <p className="text-yellow-700 font-bold text-[13px]">Moderate Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default serverDataFetching
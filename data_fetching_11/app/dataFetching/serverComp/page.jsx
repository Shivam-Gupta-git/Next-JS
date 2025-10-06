
const serverDataFetching = async (props) => {

  const searchParams = await props.searchParams
  const userName = searchParams.name

  const URl = `https://api.genderize.io/?name=${userName}`
  const response = await fetch(URl)
  const userData = await  response.json()
  console.log(userData)

  const confidencePercentage = userData.probability * 100;

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
      <h1>Server Data Fetching</h1>
      <p>UserName: {userData.name}</p>
      <p>Gender: {userData.gender}</p>
      <p>Count: {userData.count}</p>
      <p>Probability: {confidencePercentage}</p>

    </div>
  )
}
export default serverDataFetching
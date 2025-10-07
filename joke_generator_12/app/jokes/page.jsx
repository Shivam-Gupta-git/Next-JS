"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import testingPicture from '@/public/images/testing.jpg'

const RandomeJokes = () => {
  const[randomeJokes, setRandomeJokes] = useState({})
  const[showJokes, setShowJokes] = useState(true)
  const[loading, setLoading] = useState(false)
  // console.log(randomeJokes)

  const URL = "https://official-joke-api.appspot.com/random_joke" 
  
  const randomJokesFetchAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL)
      const data = await res.json()
      if(data.error){
        console.error("API Error:", data.error)
        setRandomeJokes({ error: data.error })
      }else{
        setRandomeJokes(data)
      }  
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserData({ error: "Network error occurred" });
    }
    finally{
      setLoading(false);
    }
    setShowJokes(true)
  }

  useEffect(()=> {
    randomJokesFetchAPI()
  },[])

  if (loading) {
    return (
      <div className="w-[100%] h-[100vh] bg-amber-200 flex items-center justify-center">
        <div className="w-[400px] h-[150px] bg-blue-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-700 font-medium">Loading...</h1>
          <p className="text-[12px]">Fetching gender data for </p>
        </div>
      </div>
    );
  }

  // console.log(randomeJokes)

  return(
    <div className="h-[100vh] w-[100%] bg-amber-200 flex items-center justify-center">
    <div className="w-[400px] h-[400px] border rounded bg-white border-gray-200">
      <div className="w-full  flex flex-col items-center justify-center mt-5 ">
        <div className="h-[80px] w-[80px] border border-gray-200 shadow-sm  relative rounded-full">
          <Image 
          src={testingPicture}
          alt="image" 
          fill={true}
          quality={100}
          priority={false}
          placeholder="blur"
          blurDataURL=""
          className="rounded-full"
          />
        </div>
        <h1 className="text-2xl mt-3 font-bold text-gray-700">Randome Joke Generator</h1>
        <h1 className="mt-1.5 text-gray-600 text-center w-[90%]">{randomeJokes.setup}</h1>
        {showJokes ? (
          <button onClick={() => setShowJokes(false)} className="border bg-blue-400 px-3 py-2 rounded border-gray-300 mt-2 text-white font-medium cursor-pointer shadow-sm shadow-gray-300">Show Punchline</button>
          
        ) : (
          <div className="  flex flex-col items-center justify-center mt-2">
            <h1 className="text-gray-600 text-center w-[90%]">{randomeJokes.punchline}</h1>
           <button onClick={() => setShowJokes(true)} className="border bg-red-400 px-3 py-2 rounded border-gray-300 mt-2 text-white font-medium cursor-pointer shadow-sm shadow-gray-300">Hide Punchline</button>
          </div>
        )}

        <button onClick={() => randomJokesFetchAPI()} className="border bg-yellow-600 px-5 py-1 rounded border-gray-300 mt-2 text-white font-medium cursor-pointer shadow-sm shadow-gray-300">Next</button>
        <h1 className="mt-2 text-[12px] font-light text-gray-600">Joke Id: {randomeJokes.id}</h1>
      </div>
    </div>
    </div>
  )
}

export default RandomeJokes
"use client";

import { useState } from "react";
import { Counter } from "./Counter";

const url = "https://jsonplaceholder.typicode.com/posts"

const ClientComp = () => {
  const[postData, setPostData] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()

    // console.log(data)
    setPostData(data)
  }
 


  return(
    <>
    <h1>Client Components</h1>
    <div className="flex flex-row gap-3">
    <button onClick={() => fetchData()} className="bg-amber-400 px-5 py-1 rounded border border-yellow-600 shadow-sm">click</button> 
    <Counter></Counter>
    </div>
    <div className="w-[100%]">
    {postData.map((item, index) => (
      <p key={index}>{item.body}</p>
    ))}  
    </div> 
    </>
  )
}
export default ClientComp
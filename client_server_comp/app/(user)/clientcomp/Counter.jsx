import { useState } from "react"

export const Counter = () => {
  const[count, setCount] = useState(0)

 return(
  <button onClick={() => setCount((pre) => pre + 1)} className="bg-red-400 px-5 py-1 rounded border border-red-600 shadow-sm">increment - {count}</button>
 )
} 
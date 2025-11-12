"use client"

import { useRouter } from "next/navigation"

function AddEmployeButton() {
  const router = useRouter()

  const handelAddEmployeButton = () => {
    router.push("/employe")
  }
  return (
    <button onClick={handelAddEmployeButton} className=" bg-yellow-800 px-3 py-1 rounded-xl border cursor-pointer hover:bg-amber-900 shadow-sm border-yellow-700">Add Employe</button>
  )
}

export default AddEmployeButton
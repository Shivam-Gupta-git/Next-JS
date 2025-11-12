"use client"

import { database } from "@/lib/database"
import { formActionData } from "../formActionData"
import { useActionState, useEffect } from "react"
import Submit from "@/app/components/Submit"

export default  function Employee(){

  const dataBaseConnection = async () => {
    try {
      await database()
      console.log("database fetching successfull")
    } catch (error) {
      console.error("database fetching failed", error)
    }
  }

  useEffect(() => {
   dataBaseConnection()
  }, [])

  const [state, formAction, isPending] = useActionState(formActionData, null)
  return(
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-black">
    <div className="h-15 w-full bg-amber-200 flex items-center p-5">
      <p className="font-bold text-2xl">Add Employee</p>
    </div>
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl mt-5">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Employee InhtmlFormation htmlForm</h2>
  
      <form className="space-y-5" action={formAction}>
        {/* <!-- Full Name --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>
  
        {/* <!-- Email --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>
  
        {/* <!-- Phone Number --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>
  
        {/* <!-- Gender --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">Gender</label>
          <select id="gender" name="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
  
        {/* <!-- Employee ID --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="employeeId">Employee ID</label>
          <input type="text" id="employeeId" name="employeeId" placeholder="Enter employee ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>
  
        {/* <!-- Department --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="department">Department</label>
          <select id="department" name="department"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">Select Department</option>
            <option>HR</option>
            <option>IT</option>
            <option>Sales</option>
          </select>
        </div>
  
        {/* <!-- Salary --> */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="salary">Salary</label>
          <input type="number" id="salary" name="salary" placeholder="Enter salary"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>
  
        {/* <!-- Submit Button --> */}
        <div className="text-center">
        <Submit/>
        </div>
      </form>
      <section>
        {state && (
          <p className={`${state.success ? "bg-green-400" : "bg-red-500"} w-full flex items-center justify-center mt-2 rounded-sm p-1 shadow-sm`}>
            {state.message}
          </p>
        )}
      </section>
    </div>
  
  </div>
  )
}
"use client"

import { dataBase } from "@/lib/ database.lib";
import { FormActionData } from "../FormActionData";
import { useActionState, useEffect } from "react";
import Submit from "@/app/components/Submit";


export default function Home() {

  const dataBaseConnection = async () => {
    try {
      await dataBase()
      console.log("dataBase fetch connection successfull")
    } catch (error) {
      console.error("dataBase fetch connection failed")
    }
  }

  useEffect(()=> {
   dataBaseConnection()
  },[])

  const[state, formAction, isPending] = useActionState(FormActionData, null)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Create Account</h1>
      <form className="space-y-5" action={formAction}>
        {/* <!-- First Name --> */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <!-- Last Name --> */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <!-- Email --> */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <!-- Password --> */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Submit/>
      </form>
      <section>
        {state && (
       
          <p className={state.success ? "bg-green-400 w-full flex items-center justify-center mt-2 rounded-sm  p-1 shadow-sm" : "bg-red-500 w-full flex items-center justify-center mt-2 rounded-sm p-1 shadow-sm"}>
            {state.message}
          </p>
        )}
      </section>
    </div>
  </div>
  );
}

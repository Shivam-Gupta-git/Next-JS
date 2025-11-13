"use client"

import SubmitButton from "@/app/components/SubmitButton";
import { addHospitalAction } from "../AddHospitalAction";
import { useActionState, useState } from "react";
import { database } from "@/lib/database.lib";
import HospitalDetails from "@/app/components/HospitalDetails";

export default function HospitalForm() {
  const [state, formAction, isPending] = useActionState(addHospitalAction, null)

  const fetchDataBase = async () => {
    try {
      await database()
      console.log("fetching dataBase Successfully")
    } catch (error) {
      console.error("fetching dataBase failed")
    }
  }

  useState(()=> {
    fetchDataBase()
  }, [])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 ">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8 border">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Hospital Registration Form
        </h2>
        <form action={formAction} className="space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[45%] h-[250px] flex flex-col  justify-between">
              {/* Hospital Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Hospital Name
                </label>
                <input
                  type="text"
                  name="hospitalName"
                  placeholder="Enter hospital name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Country */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* City */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="w-[45%] h-[250px] flex flex-col  justify-between">
              {/* State */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Department */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  placeholder="Enter department"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Established Year */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Established Year
                </label>
                <input
                  type="number"
                  name="establishedYear"
                  placeholder="Enter year"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1800"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
            </div>
          </div>
          <SubmitButton/>
        </form>
        <section>
        {state && (
          <p className={`${state.success ? "bg-green-400" : "bg-red-500"} w-full flex items-center justify-center mt-2 rounded-sm p-1 shadow-sm`}>
            {state.message}
          </p>
        )}
        </section>
      </div>

      <div className="border border-yellow-400 w-full h-[400px] rounded-2xl mt-2.5 shadow-2xl bg-amber-100">
        <HospitalDetails/>
      </div>
    </div>
  );
}

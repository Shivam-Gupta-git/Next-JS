import React from "react";
import { database } from "@/lib/database.lib";
import { Doctordetails } from "@/model/doctor.model";
import { cache } from "react";

export default async function Home() {
  const doctorData = await getAllDoctorData();

  return (
    <div>
      <h1>Home Page</h1>
      <h1>Total Doctors: {doctorData.length}</h1>
      <DoctorList doctorData={doctorData} />
    </div>
  );
}

const DoctorList = async () => {
  const doctorData = await getAllDoctorData();
  return (
    <>
      {doctorData.map((items, index) => (
        <div key={index}>
          <p>{items.firstName}</p>
        </div>
      ))}
    </>
  );
};

const getAllDoctorData = cache(async () => {
  try {
    await database();
    console.log("Database connection successful");

    const rowData = await Doctordetails.find({});
    const doctorData = JSON.parse(JSON.stringify(rowData));
    console.log("Doctor data fetched successfully");

    return doctorData;
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    return [];
  }
});

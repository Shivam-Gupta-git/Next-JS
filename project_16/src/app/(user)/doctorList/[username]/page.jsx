import { dataBase } from "@/lib/database.lib";
import { Doctordetails } from "@/model/doctors.model";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Doctor Profile",
  description: "Individual doctor profile page",
  authors: [
    { name: "shivam gupta" },
    { name: "shivam technical", url: "shivamtechnical.com" },
  ],
};

const Doctor = async (props) => {
  const { username } = await props.params;
  // console.log(username)

  let doctorData = null;
  try {
    await dataBase();

    const nameParts = username.split("-");
    // console.log(nameParts)
    const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    const lastName = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1) : "";

    // console.log("firstName",firstName)
    // console.log("lastName", lastName)

    const doctors = await Doctordetails.find({
      $or: [
        { firstName: firstName, lastName: lastName },
        {
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
        },
        {
          firstName: firstName.toUpperCase(),
          lastName: lastName.toUpperCase(),
        },
      ],
    });

    // console.log("doctor", doctors)

    if (doctors.length > 0) {
      doctorData = doctors[0];
    } else {
      const partialMatch = await Doctordetails.findOne({
        $or: [
          { firstName: { $regex: firstName, $options: "i" } },
          { lastName: { $regex: lastName, $options: "i" } },
        ],
      });
      doctorData = partialMatch;
    }

    console.log("doctor data fetching successfully");
  } catch (error) {
    console.error("doctor data fetching failed", error);
  }

  if (!doctorData) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Doctor Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            No doctor found with the name: <strong>{username}</strong>
          </p>
          <a
            href="/doctorList"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Doctors List
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Back Button */}
      <div className="mb-6">
        <a
          href="/doctorList"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Doctors List
        </a>
      </div>

      {/* Doctor Profile Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Dr. {doctorData.firstName} {doctorData.lastName}
                </h1>
                <p className="text-xl text-blue-100 mb-1">
                  {doctorData.department}
                </p>
                <p className="text-blue-200">
                  {doctorData.experience} years of experience
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {doctorData.bio || "No bio available for this doctor."}
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctorData.specialization?.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Qualifications
                  </h3>
                  <div className="space-y-2">
                    {doctorData.qualification?.map((qual, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {qual}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      {doctorData.phoneNumber}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {doctorData.email}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Address
                  </h3>
                  <div className="text-gray-700">
                    <p>{doctorData.address.street}</p>
                    <p>
                      {doctorData.address.city}, {doctorData.address.state}
                    </p>
                    <p>
                      {doctorData.address.pinCode}, {doctorData.address.country}
                    </p>
                  </div>
                </div>

                {/* Available Days */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Available Days
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctorData.availableDays?.map((day, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctor;

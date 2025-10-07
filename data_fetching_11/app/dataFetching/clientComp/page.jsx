"use client";
import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const serverDataFetching = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const URL = `https://api.genderize.io/?name=${userName}`;

  const dataFetching = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.error) {
        console.error("API Error:", data.error);
        setUserData({ error: data.error });
      } else {
        setUserData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserData({ error: "Network error occurred" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userName) {
      dataFetching();
    }
  }, [userName]);

  console.log(userData);

  const confidencePercentage = userData.probability
    ? userData.probability * 100
    : 0;
  const isMale = userData.gender === "male";


  if (!userName) {
    return (
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[400px] h-[150px] bg-blue-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-700 font-medium">
            No Name Provided
          </h1>
          <p className="text-[12px]">Please add ?name=userName to the URL</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[400px] h-[150px] bg-blue-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-700 font-medium">Loading...</h1>
          <p className="text-[12px]">Fetching gender data for {userName}</p>
        </div>
      </div>
    );
  }

  if (userData.error) {
    return (
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[400px] h-[180px] bg-red-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-red-700 font-medium">API Error</h1>
          <p className="text-[12px] text-red-600">
            {userData.error === "Request limit reached"
              ? "API rate limit exceeded. Please try again later."
              : userData.error}
          </p>
          <p className="text-[10px] text-gray-500 mt-2">
            Requested name: {userName}
          </p>
          {userData.error === "Request limit reached" && (
            <button
              onClick={() => dataFetching()}
              className="mt-3 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!userData.gender) {
    return (
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[400px] h-[150px] bg-blue-200 border border-gray-100 rounded shadow-sm shadow-gray-300 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-700 font-medium">
            No Data Available
          </h1>
          <p className="text-[12px]">
            Unable to fetch gender data for {userName}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-red-100 flex items-center justify-center">
        <div className="w-[350px]  border rounded bg-white border-gray-200 shadow-sm relative px-2 py-5">
          <div className="w[100%] flex flex-col items-center justify-center ">
            <div
              className={`w-[100px] h-[100px] border border-gray-200 rounded-full shadow-sm mt-2 flex items-center justify-center ${
                isMale ? "bg-blue-300" : "bg-pink-300"
              }`}
            >
              <CgProfile className="text-4xl text-gray-100" />
            </div>
            <h1 className="text-2xl font-bold text-gray-700 mt-1">
              {userData.name}
            </h1>
            <div
              className={`h-[35px] w-[100px] border border-gray-200 rounded-full mt-2  ${
                isMale ? "bg-blue-300" : "bg-pink-300"
              } flex flex-row items-center justify-center gap-1`}
            >
              <div
                className={`h-3 w-3 border rounded-full ${
                  isMale
                    ? "bg-blue-600 border-blue-700"
                    : "bg-pink-600 border-pink-700"
                }`}
              ></div>
              <p className={`${isMale ? "text-blue-700" : "text-pink-700"}`}>
                {userData.gender.charAt(0).toUpperCase() +
                  userData.gender.slice(1)}
              </p>
            </div>
            <div className="w-full h-[50px] border border-gray-100 mt-3 bg-gray-100 rounded-xl px-2">
              <div className="w-full flex flex-row justify-between ">
                <div className="flex flex-row items-center gap-0.5">
                  <CiStar className="text-xl" />
                  <p>Confidence</p>
                </div>
                <p>{confidencePercentage}</p>
              </div>
              <div
                className={`h-3 border border-gray-200 mt-1 rounded-full ${
                  isMale
                    ? "bg-linear-65 from-blue-300 to-blue-600"
                    : "bg-linear-65 from-pink-300 to-pink-600"
                }`}
                style={{ width: `${confidencePercentage}%` }}
              ></div>
            </div>
            <div className="w-full h-[50px] border border-gray-100 mt-3 bg-gray-50 rounded-xl px-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-0.5">
                <SlGraph className="text-xl" />
                <p>Data Sample Size</p>
              </div>
              <p className="font-bold">{userData.count}</p>
            </div>
            <div className="w-full h-[50px] border-yellow-300 border mt-3 bg-yellow-100 rounded-xl px-2 flex flex-row items-center gap-0.5">
              <HiOutlineUsers className="text-[14px] font-bold" />
              <p className="text-yellow-700 font-bold text-[13px]">
                Moderate Accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default serverDataFetching;

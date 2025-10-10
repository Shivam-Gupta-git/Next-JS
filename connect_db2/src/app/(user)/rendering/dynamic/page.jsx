import { Doctor } from "@/model/Doctordetails.model";
export const dynamic = 'force-dynamic';

const DynamicRendering = async () => {
  console.log("Dynamic Page");
  let doctorData = [];
  try {

    doctorData = await Doctor.find({});
    console.log("data fetching successfully", doctorData.length);
  } catch (error) {
    console.error("data fetching failed", error);
  }

  return (
    <div>
      <h1>Dynamic Rendering Page</h1>
      <div>
        {doctorData.map((items, index) => (
          <div key={index}>
            <p>{items.firstName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DynamicRendering;

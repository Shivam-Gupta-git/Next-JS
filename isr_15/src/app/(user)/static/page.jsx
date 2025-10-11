import { User } from "@/model/userdetails.model";
import { dataBase } from "@/lib/dataBase.lib";

export const revalidate = 10;

const StaticRendering = async () => {
  
  let userData = [];
  try {
    await dataBase();
    userData = await User.find({});
    console.log("get user data successfully");
  } catch (error) {
    console.error("get user data failed", error);
  }
  // console.log(userData)
  return (
    <div>
      <h1>Static Rendering Page</h1>
      {userData.map((item, index) => (
        <div key={index}>
          <h1>{item.firstName}</h1>
        </div>
      ))}
    </div>
  );
};
export default StaticRendering;

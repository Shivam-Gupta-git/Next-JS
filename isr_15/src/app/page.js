import { dataBase } from "@/lib/dataBase.lib";

export default async function Home() {
  try {
    await dataBase()
    console.log("data connection successfully")
  } catch (error) {
    console.error("data connection failed", error)
  }
  return (
   <h1>Home Page</h1>
  );
}

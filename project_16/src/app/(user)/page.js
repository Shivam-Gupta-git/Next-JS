import { dataBase } from "@/lib/database.lib";

export default async function Home() {
   await dataBase()
  return (
    <div>
      <h1>home Page</h1>
    </div>
  );
}

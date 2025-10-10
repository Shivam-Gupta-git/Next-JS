import { dataBase } from "@/lib/dataBase";

export default async function Home() {
 await dataBase()

  return (
    <h1>hello</h1>
  );
}

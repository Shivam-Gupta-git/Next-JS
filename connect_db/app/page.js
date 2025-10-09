import connectDB from "@/lib/db";
import { Product } from "@/model/product";

const Home = async () => {
  await connectDB(); 

  let data = [];

  try {
    data = await Product.find({});
    console.log("Data fetched successfully:", data.length);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="h-[100vh] w-full bg-amber-200 flex flex-col">
      <div className="w-full h-[50px] flex items-center px-2">
        <h1 className="text-xl font-bold">Home Page</h1>
      </div>

      <div className="h-full w-full flex flex-wrap gap-3 p-3">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[180px] border rounded bg-white border-gray-300 shadow-sm p-3 flex flex-col justify-between"
            >
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <h1 className="text-lg font-semibold">₹{item.price}</h1>
              <p>{item.company}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
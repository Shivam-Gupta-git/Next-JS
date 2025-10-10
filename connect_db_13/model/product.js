import mongoose from "mongoose";

const productScheema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      requier: true,
    },
    color: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { minimize: false }
);


export const Product = mongoose.models.Product || mongoose.model("Product", productScheema);
// export const Product = mongoose.model("Product", productScheema);

"use client";

import { useSearchParams } from "next/navigation"

function ProductList() {
  const searchParams =  useSearchParams();

  const category = searchParams.get("category")
  const page = searchParams.getAll("page")
  const sort = searchParams.get("sort")

  console.log("inside: ",searchParams)
  console.log("category: ", category)
  console.log("page: ", page)
  console.log("sort: ", sort)

  return (
    <div>ProductList</div>
  )
}

export default ProductList
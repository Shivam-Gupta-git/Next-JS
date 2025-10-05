import ProductList from "./ProductList"

const Products = async ({searchParams}) => {
 const searchProduct = await searchParams

 console.log("outside", searchProduct)
 
 const category = searchProduct?.category || "all"
 const sort = searchProduct?.sort || "default"
 const page = searchProduct?.page || 1

 return(
  <>
  <ProductList/>
  <h1>Showing {category} products, sorted by {sort}, page {page}</h1>
  </>
 )
}
export default Products
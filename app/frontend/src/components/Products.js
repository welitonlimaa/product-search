import ProductCard from "./ProductCard";

export default function Products({ productsData }) {
  return (
    <div className="flex flex-wrap justify-around my-32">
      {
        productsData.message === undefined ? productsData.map((product, index) => <ProductCard key={index} productData={product} />) : productsData.message
      }
    </div>
  )
}
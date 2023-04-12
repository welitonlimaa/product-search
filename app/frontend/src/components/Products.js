import ProductCard from "./ProductCard";

export default function Products({ productsData }) {
  return (
    <div className="relative flex place-items-center">
      {
        productsData.map((product, index) => <ProductCard key={index} productData={product} />)
      }
    </div>
  )
}
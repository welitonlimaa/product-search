export default function ProductCard({ productData }) {
  const { urlImg, title, description, price, urlProduct } = productData;
  return (
    <div className="">
      <img src={urlImg} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button href={urlProduct}>Ir a web</button>
    </div>
  )
}
const ProductCard = ({ product }) => {
  console.log(product);
  const { name, imageUrl, price } = product;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />

      <div className="flex flex-col items-center">
        <button className="border-2 p-2 m-2 mb-0">Add to cart</button>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-xl font-bold">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

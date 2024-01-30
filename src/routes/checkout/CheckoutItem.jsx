const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const itemTotal = quantity * price;

  return (
    <div className="grid grid-cols-4 gap-16 items-center mb-4">
      <div className="flex items-center gap-4">
        <div className="w-[200px] h-[200px]">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div>{name}</div>
      </div>
      <div className="flex items-center">{quantity}</div>
      <div className="flex items-center">{itemTotal}</div>
    </div>
  );
};

export default CheckoutItem;

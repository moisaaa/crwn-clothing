import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { addItemToCart, removeItemToCart, deleteItemFromCart } =
    useContext(CartContext);

  const itemTotal = quantity * price;

  return (
    <>
      <div className="grid grid-cols-4 gap-16 items-center my-4">
        <div className="flex items-center gap-4">
          <div className="w-[200px] h-[200px]">
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
          <div>{name}</div>
        </div>
        <div className="flex gap-1 items-center">
          <span
            className="hover:cursor-pointer text-3xl"
            onClick={() => removeItemToCart(item)}
          >
            &lt;
          </span>
          <div>{quantity}</div>
          <span
            className="hover:cursor-pointer text-3xl"
            onClick={() => addItemToCart(item)}
          >
            &gt;
          </span>
        </div>
        <div className="flex items-center">{itemTotal}</div>
        <span
          className="hover:cursor-pointer text-2xl"
          onClick={() => deleteItemFromCart(item)}
        >
          &#10006;
        </span>
      </div>
      <hr className="border-black border" />
    </>
  );
};

export default CheckoutItem;

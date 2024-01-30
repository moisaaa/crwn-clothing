import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from './CheckoutItem';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="px-[10%]">
      <div className="grid grid-cols-4 gap-16 ">
        <div className="flex items-center">Product</div>
        <div className="flex items-center">Quantity</div>
        <div className="flex items-center">Price</div>
        <div className="flex items-center">Remove</div>
      </div>
      <div className="">
        {cartItems.map((item) => (
          <CheckoutItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;

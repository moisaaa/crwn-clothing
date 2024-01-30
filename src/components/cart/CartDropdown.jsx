import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const nav = useNavigate();

  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col items-center p-5 border-black border-2 bg-white right-10 top-20 justify-between gap">
      <div className="h-full w-full flex flex-col gap-2">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button
        onClick={() => nav('checkout')}
        className="p-2 mt-2 hover:border-black hover:border-2 text-white bg-black hover:bg-white hover:text-black transition-all"
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropdown;

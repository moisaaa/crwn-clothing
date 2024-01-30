import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div onClick={toggleCart} className="relative">
      <CartIconSvg className="h-8 w-8" />
      <span className="absolute top-2 right-3">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

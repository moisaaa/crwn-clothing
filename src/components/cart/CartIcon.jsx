import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className="flex items-center gap-1">
      <CartIconSvg className="h-8 w-8" />
      <span>0</span>
    </div>
  );
};

export default CartIcon;

import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase/Firebase';

import CartIcon from '../../components/cart/CartIcon';
import CartDropdown from '../../components/cart/CartDropdown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navbar flex justify-between items-center m-4">
        <Link className="logo" to={'/'}>
          <CrwnLogo />
        </Link>
        <div className="links flex gap-2">
          <Link className="to-shop mx-1" to={'/shop'}>
            SHOP
          </Link>
          <Link className="to-contact mx-1" to={'/contact'}>
            CONTACT
          </Link>
          {currentUser ? (
            <button className="sign-out" onClick={() => signOut(auth)}>
              {'SIGN OUT'}
            </button>
          ) : (
            <Link className="to-sign-in mx-1" to={'/sign-in'}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

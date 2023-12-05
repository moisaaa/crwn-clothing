import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center m-4">
        <Link className="logo" to={'/'}>
          <CrwnLogo />
        </Link>
        <div className="links flex">
          <Link className="to-shop mx-1" to={'/shop'}>
            SHOP
          </Link>
          <Link className="to-contact mx-1" to={'/contact'}>
            CONTACT
          </Link>
          <Link className="to-sign-in mx-1" to={'/sign-in'}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

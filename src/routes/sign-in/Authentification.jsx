import SignInWMail from '../../components/sign-in/SignInWMail';

import SignUp from '../sign-up/SignUp';

const Authentification = () => {
  return (
    <div
      className="
    flex flex-col justify-around items-center md:flex-row h-screen"
    >
      <SignInWMail className="h-2/3 w-1/3" />
      <SignUp className="h-2/3 w-1/3" />
    </div>
  );
};

export default Authentification;

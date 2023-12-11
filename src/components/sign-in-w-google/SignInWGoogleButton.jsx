import {
  signInWithGooglePopup,
  createUserDoc,
} from '../../utils/firebase/Firebase';

const SignInWGoogleButton = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDoc(user);
    } catch (error) {
      console.log('Could not sign in:', error);
    }
  };
  return (
    <button
      onClick={logGoogleUser}
      className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 border rounded-full p-2 px-4 text-white"
    >
      Sign in with Google
    </button>
  );
};

export default SignInWGoogleButton;

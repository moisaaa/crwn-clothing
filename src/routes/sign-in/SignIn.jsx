import {
  signInWithGooglePopup,
  createUserDoc,
} from '../../utils/firebase/Firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDoc(user);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  );
};

export default SignIn;

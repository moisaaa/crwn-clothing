import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import SignInWGoogleButton from '../sign-in-w-google/SignInWGoogleButton';
import { signInWEmail } from '../../utils/firebase/Firebase';

const SignInWMail = (props) => {
  const defaultFormParams = {
    email: '',
    password: '',
  };

  const propClasses = props.className;

  const [formParams, setFormParams] = useState(defaultFormParams);
  const { email, password } = formParams;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormParams({ ...formParams, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWEmail(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password.');
          break;
        case 'auth/user-not-found':
          alert('No user found with this email.');
          break;
        default:
          console.log(error);
          alert('Something went wrong.');
      }
    }
  };

  const resetForm = () => {
    setFormParams(defaultFormParams);
  };

  return (
    <div
      className={`border-2 border-black p-8 justify-center flex flex-col items-center text-center ${propClasses}`}
    >
      <h2 className="text-xl mb-4">SIGN IN</h2>
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="">
          <FormInput
            label="Email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="">
          <FormInput
            label="Password"
            name="password"
            value={password}
            type="password"
            required
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="border-2 border-black rounded-full p-2 px-4 mt-4 transition-all hover:scale-105"
        >
          Sign In
        </button>
      </form>

      <SignInWGoogleButton />
    </div>
  );
};

export default SignInWMail;

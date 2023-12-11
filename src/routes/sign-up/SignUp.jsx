import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from '../../utils/firebase/Firebase';
import FormInput from '../../components/form-input/FormInput';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = (props) => {
  const propClasses = props.className;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword)
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        createUserDoc(user, { displayName });
        resetFormFields();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use')
          alert('Email already in use!');
        else if (error.code === 'auth/weak-password')
          alert('Password too weak!');
        else console.log('Could not create user:', error);
      }
    else return;
  };

  return (
    <div
      className={`text-center flex flex-col items-center border-2 border-black p-8 ${propClasses}`}
    >
      <h2>Don't have an account?</h2>
      <h1 className="mb-4 text-xl">SIGN UP WITH EMAIL</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button
          type="submit"
          className="mt-4 border-2 border-black rounded-full p-2 px-4 transition-all hover:scale-105"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

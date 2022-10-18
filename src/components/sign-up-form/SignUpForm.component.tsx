import {FirebaseError} from 'firebase/app';
import {ChangeEvent, FormEvent, useState} from 'react';
import {createUserDocumentFromAuth, signUpUserWithEmailAndPassword} from '../../utils/firebase.utils';
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';
import {AuthCredentials} from '../../models/AuthCredentials';

import './SignUpForm.styles.scss';

interface SignUpFields extends AuthCredentials {
  displayName: string;
  confirmPassword: string;
}

const initialFormState: SignUpFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState<SignUpFields>(initialFormState);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetForm = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert('The password confirmation is not matching with the password.');
    }

    try {
      const response = await signUpUserWithEmailAndPassword({email, password});

      if (response.user) {
        const ref = await createUserDocumentFromAuth({...response.user, displayName});
        console.log(ref);
      }

      resetForm();
    } catch (error: any) {
      if (error instanceof FirebaseError && error.code.includes('email-already-in-use')) {
        return alert('Sorry! That email is already in use.');
      }
      return alert(`Something went wrong: ${error.message}`);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <section className="sign-up-form">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="name"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          id="email2"
          name="email"
          type="email"
          onChange={handleChange}
          value={email} required
        />

        <FormInput
          label="Password"
          id="password2"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button buttonStyle='default' type='submit'>
          <span>Sign Up</span>
        </Button>
      </form>
    </section>
  );
};

export default SignUpForm;
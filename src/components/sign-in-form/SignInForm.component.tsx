import {AuthCredentials} from '../../models/AuthCredentials';
import {ChangeEvent, FormEvent, useState} from 'react';
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase.utils';
import {FirebaseError} from 'firebase/app';

import './SignInForm.styles.scss';

const initialFormState: AuthCredentials = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState<AuthCredentials>(initialFormState);
  const {email, password} = formFields;

  const resetForm = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(formFields);
      resetForm();
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();

      if (response.user) {
        await createUserDocumentFromAuth(response.user);
      }
    } catch (error: any) {
      if (error instanceof FirebaseError && error.code.includes('closed-by-user')) {
        return alert('Authentication cancelled by the user.');
      }

      return alert(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <section className="sign-in-form">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email} required
        />

        <FormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />

        <div className="buttons-wrapper">
          <Button buttonStyle='default' type='submit'>
            <span>Sign In</span>
          </Button>
          <Button buttonStyle='google' type='button' onClick={loginWithGoogle}>
            <span>Google Sign In</span>
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SignInForm;
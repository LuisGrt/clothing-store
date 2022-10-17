import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import {FirebaseError} from 'firebase/app';
import Button from '../../components/button/Button.component';

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();

      if (response.user) {
        const ref = await createUserDocumentFromAuth(response.user);
        console.log(ref);
      }
    } catch (error: any) {
      if (error instanceof FirebaseError && error.code.includes('closed-by-user')) {
        return alert('Authentication cancelled by the user.');
      }

      return alert(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <Button buttonStyle='google' onClick={loginWithGoogle}>
        <span>Login in with Google</span>
      </Button>
      <SignUpForm/>
    </div>
  );
};

export default Login;
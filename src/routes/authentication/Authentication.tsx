import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';

import './Authentication.scss';

const Authentication = () => {
  return (
    <section className="authentication">
      <SignInForm />
      <SignUpForm/>
    </section>
  );
};

export default Authentication;
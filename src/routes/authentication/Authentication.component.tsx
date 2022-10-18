import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <section className="authentication">
      <SignInForm />
      <SignUpForm/>
    </section>
  );
};

export default Authentication;
import './Button.styles.scss';

export interface ButtonProps {
  buttonStyle: 'default' | 'google' | 'inverted';
  type?: 'submit' | 'reset' | 'button' | undefined;
  children?: JSX.Element;
  onClick?: () => void;
}

const Button = ({buttonStyle, children, ...props}: ButtonProps) => {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
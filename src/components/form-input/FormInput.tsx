import {InputHTMLAttributes} from 'react';

import './FormInput.scss';

export interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'autoComplete'> {
  label?: string | undefined;
}

const FormInput = ({label, ...props}: FormInputProps) => {
  return (
    <div className="input-group">
      <input {...props} autoComplete="off" />
      {label &&
        <label className={`${props.value?.toString().length ? 'shrink' : ''}`} htmlFor={props.id}>
          {label}
        </label>
      }
    </div>
  );
};

export default FormInput;
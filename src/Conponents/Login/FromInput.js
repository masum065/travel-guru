import React from 'react';
import { useForm } from 'react-hook-form';
const { register, errors } = useForm();

const Input = (props) => {
  const { name, type, placeholder, require, pattern, errorFeed } = props;
  return (
    <div>
      <input
        className={`${errors}.${name}` && 'alert-border'}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register({
          required: true,
          pattern: { pattern },
        })}
      />{' '}
      {`${errors}.${name}` && <span className='error-feed'>{errorFeed}</span>}
    </div>
  );
};

export default Input;

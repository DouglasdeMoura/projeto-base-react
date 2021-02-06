import React, { FC } from 'react';
import { InputContainer, InputTag, Error } from './styled-components';
import { IProps } from './types';

const Input: FC<IProps> = ({
  disabled = false,
  iconLeft,
  iconRight,
  label,
  error,
  ...rest
}) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <div
        className="input-block"
      >
        {iconLeft && <i className="icon-left">{iconLeft}</i>}
        <InputTag
          id={label}
          disabled={disabled}
          {...rest}
        />
        {iconRight && <i className="icon-right">{iconRight}</i>}
      </div>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

export default Input;

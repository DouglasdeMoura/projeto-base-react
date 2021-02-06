import React, { FC } from 'react';
import { InputContainer, InputTag } from './styled-components';
import { IProps } from './types';

const Input: FC<IProps> = ({ disabled = false, iconLeft, iconRight, label }) => {
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
        />
        {iconRight && <i className="icon-right">{iconRight}</i>}
      </div>
    </InputContainer>
  );
}

export default Input;

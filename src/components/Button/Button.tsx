import React, { FC } from 'react';
import { ButtonTag } from './styled-components';
import { IProps } from './types';

const Button: FC<IProps> = ({ background = 'tomato', color = 'white', children }) => {
  return (
    <ButtonTag background={background} color={color}>{children}</ButtonTag>
  );
}

export default Button;

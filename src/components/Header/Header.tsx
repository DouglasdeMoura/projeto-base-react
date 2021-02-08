import React from 'react';
import { HeaderWrapper } from './styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>E-commerce</h1>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Adicionar produtos</a></li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;

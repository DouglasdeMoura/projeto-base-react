import { FC } from 'react';
import Produto from '../../components/Produto/Produto';
import { ProdutosWrapper } from './styled-components';
import { IProps } from './types';

const Produtos: FC<IProps> = ({ produtos }) => {
  return (
    <ProdutosWrapper>
      {produtos?.map(produto => <Produto {...produto} key={produto.id} />)}
    </ProdutosWrapper>
  );
}

export default Produtos;

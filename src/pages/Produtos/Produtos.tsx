import { FC } from 'react';
import Produto from '../../components/Produto/Produto';
import { IProps } from './types';

const Produtos: FC<IProps> = ({ produtos }) => {
  return (
    <div>
      {produtos?.map(produto => <Produto {...produto} key={produto.id} />)}
    </div>
  );
}

export default Produtos;

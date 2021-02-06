import React from 'react';
import { Story, Meta } from '@storybook/react';
import Produtos from './Produtos';
import type { IProps } from './types';

const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { console.log('Adicionado ao carrinho') }
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { console.log('Adicionado ao carrinho') }
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { console.log('Adicionado ao carrinho') }
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { console.log('Adicionado ao carrinho') }
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { console.log('Adicionado ao carrinho') }
  },
];

export default {
  title: 'Pages/Produtos',
  component: Produtos,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Produtos {...args} />;

export const Default = Template.bind({});
Default.args = {
  produtos
}

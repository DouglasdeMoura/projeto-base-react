import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  background?: string;
  color?: string;
}

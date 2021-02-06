import { ReactNode } from 'react';

export interface IProps {
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label: string;
}

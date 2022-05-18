import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string | null;
  type: string;
  isAuth: boolean;
  isAvailable: boolean;
  isAuthRequired: boolean | null;
};

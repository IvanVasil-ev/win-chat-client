import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  title: string | null;
  type: string;
  isAuthRequired: boolean | null;
};

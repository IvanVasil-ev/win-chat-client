import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalPropTypes = {
  selector: string;
  children: ReactNode;
};

export const Portal = ({
  selector, children,
}: PortalPropTypes) => {
  const container = document && document.getElementById(selector);
  return container !== undefined && container !== null
    ? createPortal(children, container)
    : null;
};

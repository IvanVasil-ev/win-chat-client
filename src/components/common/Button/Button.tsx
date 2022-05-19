import { useNavigate } from 'react-router-dom';
import cx from 'clsx';

import styles from './Button.module.scss';

type ButtonPropTypes = {
  children: string;
  type?: 'button' | 'link';
  toPath?: string;
  disabled?: boolean;
  onClick?: () => void;
  isReplace?: boolean;
  isActive?: boolean;
  icon?: string | null;
  style?: string | null;
};

export const Button = ({
  children,
  icon = null,
  style = null,
  toPath = '/',
  type = 'button',
  isActive = false,
  disabled = false,
  isReplace = false,
  onClick = () => {},
}: ButtonPropTypes) => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    if (type === 'link') {
      return navigate(toPath, { replace: isReplace });
    }
    return onClick();
  };

  return (
    <button
      className={cx(isActive ? styles.activeButton : styles.button, style)}
      onClick={onClickHandle}
      disabled={disabled}
    >
      <div>
        {icon && icon}
        {children}
      </div>
    </button>
  );
};

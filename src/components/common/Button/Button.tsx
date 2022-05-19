import { useNavigate } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonPropTypes = {
  children: string;
  type?: 'button' | 'link';
  toPath?: string;
  disabled?: boolean;
  onClick?: () => void;
  isReplace?: boolean;
  icon?: string | null;
};

export const Button = ({
  children,
  icon = null,
  toPath = '/',
  type = 'button',
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
    <button className={styles.button} onClick={onClickHandle} disabled={disabled}>
      <div>
        {icon && icon}
        {children}
      </div>
    </button>
  );
};

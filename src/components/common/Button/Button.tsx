import { useNavigate } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonPropTypes = {
  children: string;
  type?: 'button' | 'link';
  toPath?: string;
  onClick?: () => void;
  isReplace?: boolean;
  icon?: string | null;
};

export const Button = ({
  children, type = 'button', toPath = '/', isReplace = false, onClick = () => {}, icon = null,
}: ButtonPropTypes) => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    if (type === 'link') {
      return navigate(toPath, { replace: isReplace });
    }
    return onClick();
  };

  return (
    <button className={styles.button} onClick={onClickHandle}>
      <div>
        {icon && icon}
        {children}
      </div>
    </button>
  );
};

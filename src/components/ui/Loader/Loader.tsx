import { useEffect, useState } from 'react';
import cx from 'clsx';

import loaderIcon from '../../../assets/loading.png';
import styles from './Loader.module.scss';

type LoadingPropTypes = {
  isIcon?: boolean;
  isText?: boolean;
};

export const Loader = ({
  isIcon = false,
  isText = false,
}: LoadingPropTypes) => {
  const [textTimer, setTextTimer] = useState(0);
  const loadingText = ['Loading', 'Loading.', 'Loading..', 'Loading...'];

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (textTimer === 3) {
        return setTextTimer(0);
      }
      return setTextTimer(textTimer + 1);
    }, 800);
    return () => clearInterval(setIntervalId);
  }, [textTimer]);

  return (
    <div className={cx(styles.loaderContainer, (!isIcon || !isText) && styles.loaderCenter)}>
      {isIcon && (
        <img
          className={cx(styles.loaderIcon, isText && styles.leaderMargin)}
          src={loaderIcon}
          alt=""
        />
      )}
      {isText && (
        <span className={styles.loaderText}>
          {loadingText[textTimer]}
        </span>
      )}
    </div>
  );
};

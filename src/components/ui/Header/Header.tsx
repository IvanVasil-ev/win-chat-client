import icon from '../../../assets/mail-to.png';
import { ApplicationName } from '../../../configuration';
import styles from './Header.module.scss';

type HeaderPropTypes = {
  title?: string | null;
};

export const Header = ({ title }: HeaderPropTypes) => {
  return (
    <div className={styles.headerContainer}>
      <img src={icon} alt="" className={styles.headerIcon} />
      <span className={styles.headerTitle}>
        {title || ApplicationName}
      </span>
    </div>
  );
};

import errorIcon from '../../assets/warning.png';
import { Button } from '../../components';
import styles from './Error.module.scss';

export const NotAvailable = () => (
  <div className={styles.errorContainer}>
    <div className={styles.errorInfoWrapper}>
      <img src={errorIcon} alt="" className={styles.errorIcon} />
      <span className={styles.errorMessage}>
        Sorry, but this service is not available now!
      </span>
    </div>
    <div className={styles.errorOkay}>
      <Button type="link">Ok</Button>
    </div>
  </div>
);

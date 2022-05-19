import { Button } from '../../components';
import styles from './Auth.module.scss';

export const Auth = () => (
  <div className={styles.authContainer}>
    <div className={styles.authTitleWrapper}>
      <span className={styles.authTitle}>
        Welcome to WinChat&nbsp;Application!
      </span>
    </div>
    <div className={styles.buttonsWrapper}>
      <Button type="link" toPath="/login">Login</Button>
      <Button type="link" toPath="/registration">Registration</Button>
    </div>
  </div>
);

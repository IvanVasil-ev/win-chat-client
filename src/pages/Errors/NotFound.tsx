import errorIcon from '../../assets/search.png';
import { Button } from '../../components';
import styles from './Error.module.scss';

export const NotFound = () => {
  const token = localStorage.getItem('token') ?? null;
  const toPath = token ? '/chats' : '/';

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorInfoWrapper}>
        <img src={errorIcon} alt="" className={styles.errorIcon} />
        <span className={styles.errorMessage}>
          This is not the web page you are looking for!
        </span>
      </div>
      <div className={styles.errorOkay}>
        <Button type="link" toPath={toPath}>Ok</Button>
      </div>
    </div>
  );
};

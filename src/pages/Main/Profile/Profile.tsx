import { Button } from '../../../components';
import { useActions } from '../../../hooks';
import { logout } from '../../../store/application';
import styles from './Profile.module.scss';

export const Profile = () => {
  const { handleLogout } = useActions({
    handleLogout: logout,
  });

  return (
    <div className={styles.profileContainer}>
      Profile
      <Button type="link" toPath="/chats">Chats</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

import { useLocation } from 'react-router-dom';

import { Chats } from './Chats/Chats';
import { Profile } from './Profile/Profile';
import styles from './Main.module.scss';

export const Main = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.mainContainer}>
      {pathname === '/chats' ? <Chats /> : <Profile />}
    </div>
  );
};

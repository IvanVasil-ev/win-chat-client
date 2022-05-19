import { useLocation } from 'react-router-dom';

import { RouterMap } from '../../configuration/routerMap';
import { Button } from '../../components';
import { Profile } from './Profile/Profile';
import { Chats } from './Chats/Chats';
import styles from './Main.module.scss';

export const Main = () => {
  const { pathname } = useLocation();
  const tabs = RouterMap.filter(({ isMainPage }) => isMainPage);

  return (
    <div className={styles.mainContainer}>
      {pathname === '/chats' ? <Chats /> : <Profile />}
      <div className={styles.mainTabs}>
        {tabs.map(({ title, path }) => (
          <Button type="link" toPath={path} key={path} isActive={pathname === path}>
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

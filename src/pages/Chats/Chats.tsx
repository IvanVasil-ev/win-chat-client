import { Button } from '../../components';
import { useActions } from '../../hooks';
import { logout as logoutAction } from '../../store/application/application';
import { redirectTo } from '../../utilities';
import styles from './Chats.module.scss';

export const Chats = () => {
  const { logout } = useActions({
    logout: logoutAction,
  });

  const onClick = () => {
    logout();
    redirectTo('/');
  };

  return (
    <div>
      Chats
      <Button onClick={onClick}>Logout</Button>
    </div>
  );
};

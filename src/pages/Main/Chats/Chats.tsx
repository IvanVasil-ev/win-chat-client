import { Button } from '../../../components';
import styles from './Chats.module.scss';

export const Chats = () => {
  return (
    <div className={styles.chatContainer}>
      Chats
      <Button type="link" toPath="/profile">Profile</Button>
    </div>
  );
};

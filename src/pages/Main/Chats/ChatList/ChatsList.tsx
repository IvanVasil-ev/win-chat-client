import { Divider } from '../../../../components';
import styles from './ChatList.module.scss';

export const ChatList = () => {
  return (
    <div className={styles.chatListContainer}>
      <Divider text="Messages" />
      <Divider text="Groups" />
    </div>
  );
};

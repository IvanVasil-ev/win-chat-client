import { Chat } from './Chat/Chat';
import { ChatList } from './ChatList/ChatsList';
import styles from './Chats.module.scss';

export const Chats = () => (
  <div className={styles.chatsContainer}>
    <ChatList />
    <Chat />
  </div>
);

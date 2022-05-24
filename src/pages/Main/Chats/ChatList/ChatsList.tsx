import cx from 'clsx';

import { Divider } from '../../../../components';
import thumbnail from '../../../../assets/profile-thumbnail.jpeg';
import styles from './ChatList.module.scss';

const chats = [
  {
    id: 1,
    title: 'Ivan Ivanov',
    status: 'NEW',
    type: 'MESSAGES',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '12:10',
  },
  {
    id: 2,
    title: 'Alex Curszy',
    status: 'UNREAD',
    type: 'MESSAGES',
    lastMessage: 'How are you? 123123123123213 123123123123123123',
    isYourMessage: true,
    image: thumbnail,
    datetime: '09:22',
  },
  {
    id: 3,
    title: 'Friends',
    status: 'READ',
    type: 'GROUPS',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 4,
    title: 'Friends',
    status: 'READ',
    type: 'GROUPS',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 5,
    title: 'Friends',
    status: 'READ',
    type: 'GROUPS',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 6,
    title: 'Stan Smith',
    status: 'READ',
    type: 'MESSAGES',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 7,
    title: 'Alex Alex',
    status: 'READ',
    type: 'MESSAGES',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 8,
    title: 'Only me!',
    status: 'READ',
    type: 'MESSAGES',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
  {
    id: 9,
    title: 'Friends',
    status: 'READ',
    type: 'GROUPS',
    lastMessage: 'Hello!',
    isYourMessage: false,
    image: thumbnail,
    datetime: '09:20',
  },
];

export const ChatList = () => {
  const statusStyle = (status: string) => {
    switch (status) {
      case 'NEW':
        return styles.newStatus;
      case 'UNREAD':
        return styles.unreadStatus;
      default:
        return null;
    }
  };

  const onChatClick = () => {};

  return (
    <div className={styles.chatListContainer}>
      <Divider text="Messages" />
      <div className={styles.chatWrapper}>
        {chats.filter(({ type }) => type === 'MESSAGES').map(({
          id, title, status, lastMessage, isYourMessage, image, datetime,
        }) => (
          <div
            key={`${id}_${title}`}
            className={styles.chatContainer}
            onClick={onChatClick}
            aria-hidden
          >
            <img src={image} alt="" className={styles.chatImage} />
            <div className={styles.chatContent}>
              <span className={styles.chatTitle}>
                {title}
              </span>
              <span className={styles.chatLastMessage}>
                {`${isYourMessage ? 'You: ' : ''}${lastMessage}`}
              </span>
            </div>
            <div className={styles.chatInfo}>
              <span className={styles.chatDatetime}>
                {datetime}
              </span>
              <div className={cx(styles.chatStatus, statusStyle(status))} />
            </div>
          </div>
        ))}
      </div>
      <Divider text="Groups" />
      <div className={styles.chatWrapper}>
        {chats.filter(({ type }) => type === 'GROUPS').map(({
          id, title, status, lastMessage, isYourMessage, image, datetime,
        }) => (
          <div
            key={`${id}_${title}`}
            className={styles.chatContainer}
            onClick={onChatClick}
            aria-hidden
          >
            <img src={image} alt="" className={styles.chatImage} />
            <div className={styles.chatContent}>
              <span className={styles.chatTitle}>
                {title}
              </span>
              <span className={styles.chatLastMessage}>
                {`${isYourMessage ? 'You: ' : ''}${lastMessage}`}
              </span>
            </div>
            <div className={styles.chatInfo}>
              <span className={styles.chatDatetime}>
                {datetime}
              </span>
              <div className={cx(styles.chatStatus, statusStyle(status))} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

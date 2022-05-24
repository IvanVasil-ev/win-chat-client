import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';

import { Button, Input } from '../../../../components';
import styles from './Chat.module.scss';

const currentChat = [
  {
    id: 1,
    title: 'Ivan Vasilev',
    message: 'Hello!',
    isYourMessage: true,
    datetime: '08:12',
  },
  {
    id: 2,
    title: 'Ivan Ivanov',
    message: 'Hello!',
    isYourMessage: false,
    datetime: '10:29',
  },
  {
    id: 3,
    title: 'Ivan Vasilev',
    message: 'How are you?',
    isYourMessage: true,
    datetime: '12:10',
  },
  {
    id: 4,
    title: 'Ivan Ivanov',
    message: 'good!',
    isYourMessage: false,
    datetime: '12:10',
  },
  {
    id: 5,
    title: 'Ivan Ivanov',
    message: 'Are you?',
    isYourMessage: false,
    datetime: '12:10',
  },
].reverse();

export const Chat = () => {
  const [message, setMessage] = useState('');
  const chatRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    chatRef.current !== null && chatRef.current.scrollIntoView(false);
  };

  const onMessagesend = () => {
    setMessage('');
    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chat}>
        <div className={styles.chatHistory}>
          {currentChat.map(({
            id, title, message, isYourMessage, datetime,
          }) => (
            <div
              key={`${id}_${message}`}
              className={cx(styles.chatMessageWrapper, isYourMessage && styles.own)}
            >
              <div className={styles.chatMessageTitle}>
                {title}
              </div>
              <div className={styles.chatMessage}>
                {message}
              </div>
              <div className={styles.messageInfo}>
                {datetime}
              </div>
            </div>
          ))}
        </div>
        <div ref={chatRef} />
      </div>
      <div className={styles.chatInputWrapper}>
        <div className={styles.chatInput}>
          <Input value={message} onChange={setMessage} noError />
        </div>
        <Button style={styles.button} onClick={onMessagesend}>
          Send
        </Button>
      </div>
    </div>
  );
};

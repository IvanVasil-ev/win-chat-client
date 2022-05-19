import { Button, Input } from '../../../../components';
import styles from './Chat.module.scss';

export const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        123
      </div>
      <div className={styles.chatInputWrapper}>
        <div className={styles.chatInput}>
          <Input value="" noError />
        </div>
        <Button style={styles.button}>
          Send
        </Button>
      </div>
    </div>
  );
};

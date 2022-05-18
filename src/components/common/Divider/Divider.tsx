import styles from './Divider.module.scss';

type DividerPropTypes = {
  isChat?: boolean;
}

export const Divider = ({ isChat = false }: DividerPropTypes) => (
  <div className={styles.dividerContainer}>
    <div className={styles.dividerTop} />
    <div className={isChat ? styles.dividerBottomGrey : styles.dividerBottomWhite} />
  </div>
);

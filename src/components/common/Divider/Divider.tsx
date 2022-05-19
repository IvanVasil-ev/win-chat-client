import styles from './Divider.module.scss';

type DividerPropTypes = {
  text?: string;
  isChat?: boolean;
}

export const Divider = ({ text = '', isChat = false }: DividerPropTypes) => (
  <div className={styles.dividerContainer}>
    <div className={styles.dividerLine}>
      <div className={styles.dividerTop} />
      <div className={isChat ? styles.dividerBottomGrey : styles.dividerBottomWhite} />
    </div>
    {text && (
      <>
        <span className={styles.dividerText}>
          {text}
        </span>
        <div className={styles.dividerLine}>
          <div className={styles.dividerTop} />
          <div className={isChat ? styles.dividerBottomGrey : styles.dividerBottomWhite} />
        </div>
      </>
    )}
  </div>
);

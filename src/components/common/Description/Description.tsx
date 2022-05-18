import styles from './Description.module.scss';

type DescriptionPropTypes = {
  text: string;
};

export const Description = ({
  text,
}: DescriptionPropTypes) => (
  <div className={styles.descriptionWrapper}>
    <span className={styles.descriptionText}>{text}</span>
  </div>
);

import cx from 'clsx';
import { useNavigate } from 'react-router-dom';

import styles from './Input.module.scss';

type InputPropTypes = {
  value: string;
  onChange: (e: string) => void;
  type?: 'text' | 'email' | 'password';
  title?: string;
  caption?: string;
  placeholder?: string;
  errorMessage?: string;
  captionLink?: string;
  disabled?: boolean;
  captionColor?: 'black' | 'surface';
}

export const Input = ({
  value,
  onChange,
  type = 'text',
  title = '',
  caption = '',
  captionLink = '',
  placeholder = '',
  errorMessage = '',
  disabled = false,
  captionColor = 'black',
}: InputPropTypes) => {
  const navigate = useNavigate();
  const captionColorStyle = captionColor === 'black' ? styles.captionBlack : styles.captionSurface;
  const captionLinkStyle = captionLink ? styles.captionLink : styles.captionDefault;

  return (
    <div className={styles.inputWrapper}>
      {(title || caption) && (
        <div className={styles.inputTitleWrapper}>
          <span className={styles.inputTitle}>{title}</span>
          <span
            className={cx(styles.inputCaption, captionColorStyle, captionLinkStyle)}
            onClick={() => captionLink && navigate(captionLink)}
            aria-hidden
          >
            {caption}
          </span>
        </div>
      )}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <span className={styles.inputErrorMessage}>{errorMessage}</span>
    </div>
  );
};

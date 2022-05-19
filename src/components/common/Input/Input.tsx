import { useNavigate } from 'react-router-dom';
import cx from 'clsx';

import styles from './Input.module.scss';

type InputPropTypes = {
  value: string;
  onChange?: (e: string) => void;
  type?: 'text' | 'email' | 'password';
  title?: string;
  caption?: string;
  placeholder?: string;
  style?: string | null;
  errorMessage?: string;
  captionLink?: string;
  disabled?: boolean;
  noError?: boolean;
  captionColor?: 'black' | 'surface';
}

export const Input = ({
  value,
  type = 'text',
  title = '',
  caption = '',
  style = null,
  noError = false,
  captionLink = '',
  placeholder = '',
  errorMessage = '',
  disabled = false,
  onChange = () => {},
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
        className={cx(styles.input, style)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
      {!noError && <span className={styles.inputErrorMessage}>{errorMessage}</span>}
    </div>
  );
};

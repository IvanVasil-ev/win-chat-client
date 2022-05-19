import { useState } from 'react';

import {
  Button, Divider, Input, Description,
} from '../../components';
import { EMAIL_NOT_VALID, EMAIL_REGEXP } from '../../configuration';
import { useActions } from '../../hooks';
import { forgotPasswordAction } from '../../store/application/actions';
import { setModal } from '../../store/application/application';
import { redirectTo } from '../../utilities';
import { PagePropTypes } from '../types';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = ({ title }: PagePropTypes) => {
  const [email, setLogin] = useState('');

  const { handleForgotPasswordEmail, handleModal } = useActions({
    handleForgotPasswordEmail: forgotPasswordAction,
    handleModal: setModal,
  });

  const onClick = () => {
    if (!email.match(EMAIL_REGEXP)) {
      return handleModal({ status: 'error', message: EMAIL_NOT_VALID, type: 'error' });
    }
    handleForgotPasswordEmail({ email });
    redirectTo('/');
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPasswordTittleWrapper}>
        <span className={styles.forgotPasswordTitle}>{title}</span>
      </div>
      <div className={styles.forgotPasswordDescriptionWrapper}>
        <Description text="We will send recovery link on your email!" />
      </div>
      <Divider />
      <div className={styles.formWrapper}>
        <Input
          title="Email"
          type="email"
          value={email}
          onChange={setLogin}
          placeholder="john@doe.com"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="link">Back</Button>
        <Button onClick={onClick} disabled={!email.trim()}>Send email</Button>
      </div>
    </div>
  );
};

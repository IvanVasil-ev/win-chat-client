import { useEffect, useState } from 'react';

import {
  Button, Divider, Input, Description,
} from '../../components';
import { PASSWORD_NOT_VALID, PASSWORDS_NOT_EQUALS } from '../../configuration';
import { resetPasswordAction, setModal } from '../../store/application';
import { useActions } from '../../hooks';
import { PagePropTypes } from '../types';
import styles from './ResetPassword.module.scss';

export const ResetPassword = ({ title }: PagePropTypes) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isDisabled = !email.trim() || !newPassword.trim() || !confirmPassword.trim();
  const passwordsIsNotValid = newPassword.trim() !== confirmPassword.trim();

  useEffect(() => {
    setEmail('john@doe.com');
  }, [email]);

  const { handleResetPassword, handleModal } = useActions({
    handleResetPassword: resetPasswordAction,
    handleModal: setModal,
  });

  const onClick = () => {
    if (passwordsIsNotValid) {
      return handleModal({ status: true, message: PASSWORDS_NOT_EQUALS, type: 'error' });
    }
    if (newPassword.trim().length < 6) {
      return handleModal({
        status: true, message: PASSWORD_NOT_VALID, type: 'error',
      });
    }
    handleResetPassword({ email, newPassword });
  };

  return (
    <div className={styles.resetPasswordContainer}>
      <div className={styles.resetPasswordTittleWrapper}>
        <span className={styles.resetPasswordTitle}>{title}</span>
      </div>
      <div className={styles.resetPasswordDescriptionWrapper}>
        <Description text="Enter your new password!" />
      </div>
      <Divider />
      <div className={styles.formWrapper}>
        <Input
          disabled
          title="Email"
          type="email"
          value={email}
        />
        <Input
          title="New password"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          caption="Minimum 6 characters"
        />
        <Input
          title="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="link" isReplace>Back</Button>
        <Button onClick={onClick} disabled={isDisabled}>Reset</Button>
      </div>
    </div>
  );
};

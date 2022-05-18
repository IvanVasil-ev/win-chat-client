import { useEffect, useState } from 'react';

import {
  Button, Divider, Input, Description,
} from '../../components';
import { PagePropTypes } from '../types';
import styles from './ResetPassword.module.scss';

export const ResetPassword = ({ title }: PagePropTypes) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setEmail('john@doe.com');
  }, [email]);

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
          onChange={setPassword}
        />
        <Input
          title="New password"
          type="password"
          value={password}
          onChange={setPassword}
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
        <Button type="button">Reset</Button>
      </div>
    </div>
  );
};

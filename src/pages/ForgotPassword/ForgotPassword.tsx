import { useState } from 'react';

import {
  Button, Divider, Input, Description,
} from '../../components';
import { PagePropTypes } from '../types';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = ({ title }: PagePropTypes) => {
  const [email, setLogin] = useState('');

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
        <Button type="button">Send email</Button>
      </div>
    </div>
  );
};

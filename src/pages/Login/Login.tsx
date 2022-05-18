import { useState } from 'react';

import { PagePropTypes } from '../types';
import { Button, Divider, Input } from '../../components';
import styles from './Login.module.scss';

export const Login = ({ title }: PagePropTypes) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginTittleWrapper}>
        <span className={styles.loginTitle}>{title}</span>
      </div>
      <Divider />
      <div className={styles.formWrapper}>
        <Input
          title="Username"
          value={login}
          onChange={setLogin}
        />
        <Input
          title="Passoword"
          caption="Forgot password?"
          captionColor="surface"
          captionLink="/forgot-password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="link">Back</Button>
        <Button type="button">Login</Button>
      </div>
    </div>
  );
};

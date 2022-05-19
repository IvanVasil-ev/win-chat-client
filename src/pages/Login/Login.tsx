import { useState } from 'react';

import { PagePropTypes } from '../types';
import { Button, Divider, Input } from '../../components';
import { loginAction } from '../../store/application';
import { useActions } from '../../hooks';
import styles from './Login.module.scss';

export const Login = ({ title }: PagePropTypes) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !login.trim() || !password.trim();
  const { handleLogin } = useActions({
    handleLogin: loginAction,
  });

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
        <Button onClick={() => handleLogin({ login, password })} disabled={isDisabled}>
          Login
        </Button>
      </div>
    </div>
  );
};

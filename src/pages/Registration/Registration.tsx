import { useState } from 'react';

import { PagePropTypes } from '../types';
import { Button, Divider, Input } from '../../components';
import styles from './Registration.module.scss';

export const Registration = ({ title }: PagePropTypes) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationTittleWrapper}>
        <span className={styles.registrationTitle}>{title}</span>
      </div>
      <Divider />
      <div className={styles.formWrapper}>
        <Input
          title="Email"
          value={email}
          placeholder="john@doe.com"
          onChange={setEmail}
          type="email"
        />
        <Input
          title="Username"
          value={login}
          placeholder="John_Doe"
          onChange={setLogin}
        />
        <Input
          title="Passoword"
          caption="Minimum 6 characters!"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="link">Back</Button>
        <Button type="button">Registrate</Button>
      </div>
    </div>
  );
};

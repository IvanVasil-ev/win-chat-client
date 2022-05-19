import { useState } from 'react';

import { PagePropTypes } from '../types';
import { Button, Divider, Input } from '../../components';
import { registrateAction } from '../../store/application/actions';
import { useActions } from '../../hooks';
import { EMAIL_NOT_VALID, EMAIL_REGEXP, PASSWORD_NOT_VALID } from '../../configuration';
import { setModal } from '../../store/application/application';
import styles from './Registration.module.scss';

export const Registration = ({ title }: PagePropTypes) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !email.trim() || !login.trim() || !password.trim();

  const { handleRegistrate, handleModal } = useActions({
    handleRegistrate: registrateAction,
    handleModal: setModal,
  });

  const onClick = () => {
    if (!email.match(EMAIL_REGEXP)) {
      return handleModal({ status: true, message: EMAIL_NOT_VALID, type: 'error' });
    }
    if (password.trim().length < 6) {
      return handleModal({ status: true, message: PASSWORD_NOT_VALID, type: 'error' });
    }
    handleRegistrate({ email, login, password });
  };

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
        <Button onClick={onClick} disabled={isDisabled}>Registrate</Button>
      </div>
    </div>
  );
};

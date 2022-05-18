import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { ApplicationName } from '../configuration';
import { Header } from '../components';
import { LayoutProps } from './types';
import { NotAvailable } from '../pages';
import styles from './Layout.module.scss';

export const MainLayout = ({
  children, title, type, isAuth, isAvailable, isAuthRequired,
}: LayoutProps) => {
  const navigate = useNavigate();
  const isMainType = type === 'main';

  useEffect(() => {
    if (isAuth && !isAuthRequired && isAuthRequired !== null) {
      navigate('/chats');
    }
    if (!isAuth && isAuthRequired) {
      navigate('/');
    }
  }, [isAuthRequired, isAuth]);

  return (
    <div className={isMainType ? styles.mainContainer : styles.authContainer}>
      <Helmet>
        <title>{title ? `${title} | ${ApplicationName}` : ApplicationName}</title>
      </Helmet>
      <Header title={isMainType ? title : null} />
      {isAvailable ? children : (<NotAvailable />)}
    </div>
  );
};

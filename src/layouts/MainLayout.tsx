import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { getIsAvailableAction } from '../store/application/actions';
import { ApplicationName } from '../configuration';
import { Header, Loader } from '../components';
import { NotAvailable } from '../pages';
import { LayoutProps } from './types';
import { useActions } from '../hooks';
import { RootState } from '../store';
import styles from './Layout.module.scss';

export const MainLayout = ({
  children, title, type, isAuthRequired,
}: LayoutProps) => {
  const navigate = useNavigate();
  const { isLoading, isAvailable } = useSelector(
    (state: RootState) => state.application,
  );
  const { handleIsAvailable } = useActions({
    handleIsAvailable: getIsAvailableAction,
  });

  const token = localStorage.getItem('token') ?? null;
  const isMainType = type === 'main';
  const content = isLoading
    ? <Loader isIcon isText />
    : children;

  useEffect(() => {
    handleIsAvailable();
  }, []);

  useEffect(() => {
    if (token && !isAuthRequired && isAuthRequired !== null) {
      navigate('/chats');
    }
    if (!token && isAuthRequired) {
      navigate('/');
    }
  }, [isAuthRequired, token]);

  return (
    <div className={isMainType ? styles.mainContainer : styles.authContainer}>
      <Helmet>
        <title>{title ? `${title} | ${ApplicationName}` : ApplicationName}</title>
      </Helmet>
      <Header title={isMainType ? title : null} />
      {isAvailable ? content : (<NotAvailable />)}
    </div>
  );
};

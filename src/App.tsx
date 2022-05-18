import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { RouterMap } from './configuration/routerMap';
import { MainLayout } from './layouts';
import { RootState } from './store';

export const App = () => {
  const {
    authorization: { isAuthorized },
    application: { isAvailable },
  } = useSelector((state: RootState) => state);

  const isAuth = isAvailable && isAuthorized;

  return (
    <Router>
      <Routes>
        {RouterMap.map(({
          Component, layoutType, path, title, isAuthRequired,
        }) => (
          <Route
            key={`${path}_${title}`}
            path={path}
            element={(
              <MainLayout
                title={title}
                isAuth={isAuth}
                type={layoutType}
                isAvailable={isAvailable}
                isAuthRequired={isAuthRequired}
              >
                <Component title={title} />
              </MainLayout>
            )}
          />
        ))}
      </Routes>
    </Router>
  );
};

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { RouterMap } from './configuration/routerMap';
import { MainLayout } from './layouts';

export const App = () => {
  const isAvailable = false;
  const isAuth = isAvailable && false;

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

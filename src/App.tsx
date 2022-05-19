import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Modal } from './components';

import { RouterMap } from './configuration/routerMap';
import { MainLayout } from './layouts';

export const App = () => (
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
              type={layoutType}
              isAuthRequired={isAuthRequired}
            >
              <Component title={title} />
            </MainLayout>
          )}
        />
      ))}
    </Routes>
    <Modal />
  </Router>
);

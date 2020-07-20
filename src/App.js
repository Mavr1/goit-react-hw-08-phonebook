import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Header from './components/header/Header';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import routes from './routes';
import themeSelectors from './redux/theme/themeSelectors';
import styles from './App.module.css';
import { getCurrentUser } from './redux/auth/authOperations';

const App = () => {
  const currentTheme = useSelector((state) =>
    themeSelectors.getCurrentTheme(state)
  );
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCurrentUser()), [dispatch]);

  return (
    <div
      className={currentTheme === 'light' ? styles.AppLight : styles.AppDark}
    >
      <Header />
      <Switch>
        {routes.map((route) =>
          route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
            <PublicRoute key={route.label} {...route} />
          )
        )}
      </Switch>
    </div>
  );
};

export default App;

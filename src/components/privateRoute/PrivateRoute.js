import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => authSelectors.getAuth(state));
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

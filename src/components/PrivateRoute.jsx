import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
  isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;

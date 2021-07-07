import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as roles from '../../constants/roles';
import { Helmet } from 'react-helmet';

const PrivateRoute = props => {
  const { component: Component, roleId, auth, allowedRoles, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        return auth && (!allowedRoles || allowedRoles.includes(roleId)) ? (
          <>
            <Helmet>
              <title>WIV</title>
            </Helmet>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.oneOf(Object.values(roles))),
};

export default PrivateRoute;

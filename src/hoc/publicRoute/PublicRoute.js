import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
export default ({ component: Component, shouldRedirect, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const { auth } = rest;
        return shouldRedirect && auth ? (
          <Redirect to={routes.HOME} />
        ) : (
          Layout ? (
              <Layout>
                <Component {...props} />
              </Layout>
          ) : <Component {...props} />
        );
      }}
    />
  );
};

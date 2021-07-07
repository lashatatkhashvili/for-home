import React from 'react';
import Loader from '../../components/Loader/Loader';

const withLoading = Component => {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Loader />;
  };
};

export default withLoading;

import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';
import * as DarkLoader from '../../assets/images/darkLoader';
import * as LightLoader from '../../assets/images/lightLoader';
import * as GoldLoader from '../../assets/images/goldLoader';

const Loader = props => {
  const { type } = props;

  const types = {
    DarkLoader: DarkLoader,
    LightLoader: LightLoader,
    GoldLoader: GoldLoader,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: types[type].default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const style = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className={`${styles.loader} ${styles[type]}`}>
      <Lottie options={defaultOptions} {...style} />
    </div>
  );
};

Loader.defaultProps = {
  type: 'GoldLoader',
};

Loader.propTypes = {
  type: PropTypes.oneOf(['DarkLoader', 'LightLoader', 'GoldLoader']),
};

export default Loader;

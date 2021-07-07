import React, { Component } from 'react';
import styles from './WhiteBox.module.scss';

class Whitebox extends Component {
  render() {
    const { className, children } = this.props;

    return <div className={`${styles.whiteBox} ${className}`}>{children}</div>;
  }
}

export default Whitebox;

import React, { Component } from 'react';
import styles from './StripedBox.module.scss';

class StripedBox extends Component {
  render() {
    const { children } = this.props;

    return <div className={styles.stripedBox}>{children}</div>;
  }
}

export default StripedBox;

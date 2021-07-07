import React, { Component } from 'react';
import styles from './AuthLayout.module.scss';

class AuthLayout extends Component {

  render() {
    return (
      <div className={styles.authLayoutWrapper}>
        <div className={styles.authLayoutBackdrop}>
          <div className={styles.authLayout}>
            <div className={styles.authLayoutContent}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthLayout;

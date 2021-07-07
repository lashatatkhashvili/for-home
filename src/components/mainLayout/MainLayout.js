import React, { Component } from 'react';
import Header from '../header/Header';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../screens/sideMenu/SideMenuContainer';
// import Backdrop from '../backdrop/Backdrop';
import Loader from '../Loader/Loader';

class MainLayout extends Component {
  handleCloseSideMenu = () => {
    this.props.closeSideMenu();
  };

  render() {
    const { wrapperClassName, headerClassName, bodyClassName, isLoading, loaderType, ...rest } = this.props;

    return (
      <div className={`${styles.wrapper} ${wrapperClassName}`} {...rest}>
        <div className={`${styles.header} ${headerClassName}`}>
          <Header />
        </div>

        <div className={`${styles.body} ${bodyClassName}`}>
          <div className={styles.drawer}>
            <SideMenuContainer />
          </div>
          <div className={styles.content}>{this.props.children}</div>
          {isLoading && (
            <div className={styles.loaderWrapper}>
              <Loader type={loaderType} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  backgroundClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};

export default MainLayout;

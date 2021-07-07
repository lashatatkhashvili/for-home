import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthLayout from '../../components/authLayout/AuthLayout';
import LoginContainer from '../login/LoginContainer';
import PrivateRoute from '../../hoc/privateRoute/PrivateRouteContainer';
import PublicRoute from '../../hoc/publicRoute/PublicRouteContainer';
import styles from './App.module.scss';
import * as routes from '../../constants/routes';
import { ADMIN, COMMUNITYMANAGER, HR, SUPER_ADMIN } from '../../constants/roles';
import { isUserAllowed } from '../../utils/helpers';
import Intercom from '../../utils/intercom';
import OneSignal from '../../network/OneSignal';
import WivTools from '../wivTools/wivTools';
import ProfileEditContainer from '../profile/profileEdit/ProfileEditContainer';
import ContentContainer from '../content/ContentContainer';
import GalleryContainer from '../gallery/Gallery';
import { Box } from '@material-ui/core';
import RichTextEditor from '../../components/richTextEditor/RichTextEditor';


class App extends Component {
  constructor(props) {
    super(props);

    const { getCurrentUser } = props;

    getCurrentUser();

    Intercom.loadIntercomScript();

    this.inactivityTimeout = null;
    this.inactivityTimeInMinutes = Number(process.env.REACT_APP_IDLE_DURATION_IN_MINUTES);
  }

  componentDidMount() {
    // Initialize intercom
    this.initializeIntercom();

    // Initialize OneSignal
    OneSignal.initOneSignal();

    window.onload = this.resetInactivityTimer;
    window.onmousemove = this.resetInactivityTimer;
    window.onkeypress = this.resetInactivityTimer;
  }

  componentDidUpdate(prevProps, prevState) {
    const { auth } = this.props;

    if (prevProps.auth === null && auth) {
      // Initialize intercom
      this.initializeIntercom();
    }
  }

  initializeIntercom = () => {
    const { auth } = this.props;

    if (auth && isUserAllowed([HR])) {
      const {
        user: { id, email, name },
      } = auth;
      Intercom.initialize(id, email, name);
    }
  };

  resetInactivityTimer = () => {
    const { auth, logoutUser } = this.props;
    clearTimeout(this.inactivityTimeout);
    if (!auth) return;
    this.inactivityTimeout = setTimeout(logoutUser, this.inactivityTimeInMinutes * 60 * 1000);
  };

  render() {
    return (
      <div className={styles.app}>
        <Box display="none">
          <RichTextEditor />
        </Box>
        <Switch>
          <PrivateRoute path={routes.WIV_TOOLS} component={WivTools} exact />
          <PrivateRoute path={routes.PROFILE_EDIT} component={ProfileEditContainer} exact />
          <PrivateRoute path={routes.HOME} component={ContentContainer} exact />
          <PrivateRoute path={routes.GALLERY} component={GalleryContainer} exact />

          <PublicRoute layout={AuthLayout} shouldRedirect path={routes.ROOT} component={LoginContainer} exact />
        </Switch>
      </div>
    );
  }
}

export default App;

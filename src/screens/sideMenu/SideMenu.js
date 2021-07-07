import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as Icons from '../../components/icons/Icons';
import classes from './SideMenu.style';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import './SideMenu.scss';
import Tooltip from '@material-ui/core/Tooltip';
import * as routes from '../../constants/routes';

class SideMenu extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  getNavigationItems = () => {
    const { t, classes, } = this.props;

    return [
      {
        key: 'home',
        to: routes.HOME,
        icon: <Icons.HomeRounded className={classes.sideMenuListItemIcon} />,
        tooltip: t('Home'),
      },
      {
        key: 'gallery',
        to: routes.GALLERY,
        icon: <Icons.Gallery className={classes.sideMenuListItemIcon} />,
        tooltip: t('Gallery'),
      },
    ];
  };

  render() {
    const {
      classes,
      location,
    } = this.props;

    return (
      <>
        <Drawer
          open={true}
          variant="persistent"
          classes={{ root: classes.drawerRoot, paper: classes.drawerPaper }}
          elevation={5}
        >
          <Box className={classes.listItemsWrapper}>
            <List>
              {this.getNavigationItems().map(navItem => (
                <Tooltip
                  key={navItem.key}
                  title={navItem.tooltip}
                  placement="right"
                  arrow
                  classes={{ tooltip: classes.navItemsToolTip }}
                >
                  <ListItem
                    button
                    component={Link}
                    to={navItem.to}
                    className={`${classes.sideMenuListItem} ${
                      location.pathname === navItem.to ? 'sideMenuListItemActive' : ''
                    }`}
                  >
                    {navItem.icon}
                  </ListItem>
                </Tooltip>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  }
}

export default withTranslation('translations')(withStyles(classes)(withRouter(SideMenu)));

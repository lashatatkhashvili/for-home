import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import wivLogo from '../../../assets/images/WIVlogo.png';
import * as Icons from '@material-ui/icons';
import useStyles from './HeaderContent.style';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withTranslation } from 'react-i18next';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MaterialButton from '../../materialButton/MaterialButton';
import Box from '@material-ui/core/Box';
import CloseButton from '../../../assets/images/icons/close-rounded.svg';

const HeaderContent = props => {
  const {
    t,
    user,
    logoutUser,
    globalMessageType,
    globalMessage,
    clearGlobalMessage
  } = props;
  const classes = useStyles();
  const [accountMenuAnchorNode, setAccountMenuAnchorNode] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccountMenuOpen = event => {
    const node = event.target;
    setAccountMenuAnchorNode(node);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchorNode(null);
  };

  const handleLogoutButtonClick = () => {
    logoutUser();
    handleAccountMenuClose();
  };

  const renderAccountMenu = () => {
    return (
      <Menu
        id="account-menu"
        anchorEl={accountMenuAnchorNode}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={!!accountMenuAnchorNode}
        onClose={handleAccountMenuClose}
        keepMounted
      >
        <MenuItem onClick={handleLogoutButtonClick}>{t('Log out')}</MenuItem>
      </Menu>
    );
  };

  const globalMessageBox = (type, message , clearMessage ) => {
    return (
      <>
        {message && (
      <Box className={classes.globalMessageBox} style={{backgroundColor : type.success ? '#a8e9a4' : 'darkred'}}>
        <h4 className={classes.globalMessage}>{message && message}</h4>
        <img src={CloseButton} className={classes.closeButton} onClick={clearMessage}/>
      </Box>
        )}
    </>
    )
  };
  return (
    <AppBar position="static" color="inherit" className={classes.appBarWrapper}>
      <Toolbar>
        <Grid container className={classes.logoWrapper}>
          <Box className={classes.logoContent}>
            <img src={wivLogo} alt="" className={classes.logoImage} />
          </Box>
        </Grid>

        <Grid container alignItems="center" justify="flex-end">
          <MaterialButton
            endIcon={<Icons.KeyboardArrowDown />}
            color="inherit"
            onClick={handleAccountMenuOpen}
            size="large"
            className={classes.accountUser}
          >
            {user.name}
          </MaterialButton>
          <Link to={`/profile/edit/${user.id}`}>
            <Avatar src={user.avatar} />
          </Link>
        </Grid>
      </Toolbar>
      {renderAccountMenu()}
      {globalMessageBox(globalMessageType, globalMessage , clearGlobalMessage)}
    </AppBar>
  );
};

export default withRouter(withTranslation('translations')(HeaderContent));

import React from 'react';
import { Drawer } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';
import IconButton from '@material-ui/core/IconButton';
import * as Icons from '@material-ui/icons';
import useStyles from './FormDrawer.style';

const FormDrawer = props => {
  const { isOpen, onClose, title, children } = props;
  const classes = useStyles();
  const intercomNode = document.querySelector('#intercom-container');

  if (intercomNode) {
    if (isOpen) {
      intercomNode.style.display = 'none';
    } else {
      intercomNode.style.display = 'initial';
    }
  }

  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right" classes={{ paper: classes.drawerRoot }}>
      <Box p={3} className={classes.header}>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <Icons.Close color="inherit" />
        </IconButton>
        <MaterialTypography size="20px" color="inherit" align="center" className={classes.title}>
          {title}
        </MaterialTypography>
      </Box>
      {children}
    </Drawer>
  );
};

export default FormDrawer;

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './UserListDialog.style';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as Icons from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const UserListDialog = props => {
  const { dialogTitle, dialogTitleStyle, onClose, isOpen, userList } = props;
  const classes = useStyles();

  // button onClick={() => this.handleUserSelectorChange(user.id)}

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle className={dialogTitleStyle}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>{dialogTitle}</Grid>

          <Grid item>
            <IconButton onClick={onClose}>
              <Icons.Close />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <List className={classes.userListSelector}>
        {userList.map(user => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

UserListDialog.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  userList: PropTypes.array,
  dialogTitle: PropTypes.string,
};

export default withTranslation('translations')(UserListDialog);

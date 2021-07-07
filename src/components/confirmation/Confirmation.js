import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import AddGroupButton from '../addGroupButton/AddGroupButton';
const Confirmation = props => {
  const { t, title, confirm, cancel, children, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const awaitingPromiseRef = React.useRef();

  const confirmHandler = () => {
    setIsOpen(true);
    if (!isOpen) {
      return new Promise((resolve, reject) => {
        awaitingPromiseRef.current = { resolve, reject };
      });
    }
  };

  const handleClose = () => {
    awaitingPromiseRef.current.reject();
    setIsOpen(false);
  };

  const handleSubmit = () => {
    awaitingPromiseRef.current.resolve();
    setIsOpen(false);
  };
  props.receiveMethod(confirmHandler);
  return (
    <Dialog open={isOpen} onClose={handleClose} {...rest}>
      {title && <DialogTitle id="form-dialog-title">{t(title)}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{children ? children : 'This process cannot be undone.'}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          {t(cancel)}
        </Button>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          {t(confirm)}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
Confirmation.defaultProps = {
  title: 'Are you sure?',
  confirm: 'Confirm',
  cancel: 'Cancel',
};
Confirmation.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  confirm: PropTypes.string,
  cancel: PropTypes.string,
};

export default withTranslation('translations')(Confirmation);

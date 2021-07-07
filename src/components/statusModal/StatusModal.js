import React from 'react';
import MaterialTypography from '../materialTypography/MaterialTypography';
// import * as Icons from '@material-ui/icons';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const StatusModal = props => {
  const { onClose, isOpen, image, title, description, children } = props;
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogContent style={{ width: '500px' }}>
        <Box display="flex" flexDirection="column" alignItems="center" p={4}>
          <Box mb={3}>
            <img src={image} alt={image} width="72" height="72" />
          </Box>
          <MaterialTypography size="24px" weight={600} align="center">
            {title}
          </MaterialTypography>
          <MaterialTypography size="14px" weight={300} align="center" style={{ marginBottom: '20px' }}>
            {description}
          </MaterialTypography>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

StatusModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default StatusModal;

import React from 'react';
import useStyles from './ConfirmationModal.style';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import MaterialButton from '../materialButton/MaterialButton';
import LoaderWrapper from '../../hoc/loaderWrapper/LoaderWrapper';
import MaterialTypography from '../materialTypography/MaterialTypography';


const ConfirmationModal = props => {
  const { isOpen, onClose, image, contentText, secondaryText, isLoading, closeTitle, confirmTitle, onConfirm } = props;
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent className={classes.confirmationModalDialogContent}>
        <LoaderWrapper isLoading={isLoading} style={{ height: '310px' }}>
          <Grid container justify="center" alignItems="center" direction="column">
            <Box mb={2}>
              <img src={image} alt="" />
            </Box>

            <Box mb={3}>
              <MaterialTypography size="24px" weight={500} style={{textAlign: 'center'}}>
                {contentText}
              </MaterialTypography>

              {secondaryText && <MaterialTypography size="16px" weight={500} style={{textAlign: 'center'}}>
                {secondaryText}
              </MaterialTypography>}


            </Box>
          </Grid>

          <Grid container justify="center" alignItems="center">
            <MaterialButton className={classes.closeButton} onClick={onClose}>
              {closeTitle}
            </MaterialButton>
            <MaterialButton className={classes.confirmButton} onClick={onConfirm}>
              {confirmTitle}
            </MaterialButton>
          </Grid>
        </LoaderWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;

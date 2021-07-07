import React from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import Confirmation from '../../../components/confirmation/Confirmation';
import { AvatarWv } from '../../../components/icons/Icons';
const ConfirmationModal = () => {
  let confirm = null;
  const openModal = () => {
    confirm()
      .then(() => {
        console.log('Confirm');
      })
      .catch(() => {
        console.log('Cancel');
      });
  };
  return (
    <Box>
      <Box mb={1} component={Paper} variant="outlined" elevation={2} p={1}>
        {`import Confirmation from '../../components/confirmation/Confirmation';`}
      </Box>
      Define variable outside of render function for storing modal promise
      <Box mb={1} component={Paper} variant="outlined" elevation={2} p={1}>
        {`let confirm = null;`}
      </Box>
      Initilize modal with default values
      <Box mb={1} component={Paper} variant="outlined" elevation={2} p={1}>
        <pre>
          {`<Confirmation
    receiveMethod={handler => {
        confirm = handler;
    }}
/>`}
        </pre>
      </Box>
      Optional Parameters
      <Box mb={1} component={Paper} variant="outlined" elevation={2} p={1}>
        <pre>
          {`<Confirmation
    title={false || string}
    confirm='Button Text'
    cancel='Button Text'
    receiveMethod={handler => {
    confirm = handler;
    }}
>
# Body Goes Here #
</Confirmation>`}
        </pre>
      </Box>
      Usage:
      <Box mb={1} component={Paper} variant="outlined" elevation={2} p={1}>
        <pre>
          {`const openModal = () => {
    confirm()
        .then(() => {
             console.log('Confirm');
        }).catch(() => {
             console.log('Cancel');
        });
};`}
        </pre>
      </Box>
      Demo:
      <br />
      <Button onClick={openModal} variant="contained" color="secondary">
        Open Confirmation Modal
      </Button>
      <Confirmation
        receiveMethod={handler => {
          confirm = handler;
        }}
      />
    </Box>
  );
};

export default ConfirmationModal;

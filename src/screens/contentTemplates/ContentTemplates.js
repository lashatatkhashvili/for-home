import React, { Component } from 'react';
import MainLayoutContainer from '../../components/mainLayout/MainLayoutContainer';
import Box from '@material-ui/core/Box';

class ContentTemplates extends Component {
  render() {
    return (
      <MainLayoutContainer>
        <Box p={4}>
          screen
        </Box>
      </MainLayoutContainer>
    );
  }
}

export default ContentTemplates;
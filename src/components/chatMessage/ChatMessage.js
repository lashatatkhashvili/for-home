import React, { Component, createRef } from 'react';
import { withTranslation } from 'react-i18next';
import Image from '../image/Image';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MaterialTypography from '../materialTypography/MaterialTypography';
import classes from './ChatMessage.style';
import { withStyles } from '@material-ui/core/styles';

class ChatMessage extends Component {
  constructor(props) {
    super(props);

    this.imageNode = createRef();
  }

  handleImageLoad = event => {
    const { onImageLoaded } = this.props;
    if (onImageLoaded) onImageLoaded(this.imageNode.height);
  };
  render() {
    const {
      // t,
      isMine,
      message: {
        // user,
        // createdAt,
        text,
        attachment,
      },
      // onImageLoaded,
      classes,
    } = this.props;

    return (
      <Grid container justify={isMine ? 'flex-end' : 'flex-start'}>
        <Grid classes={{ root: isMine ? classes.myMessage : classes.otherMessage }}>
          <MaterialTypography size="13px" weight={300}>
            {text}

            {attachment && (
              <Image
                imageUrl={attachment.url}
                className={classes.attachment}
                ref={node => (this.imageNode = node)}
                onLoad={this.handleImageLoad}
              />
            )}
          </MaterialTypography>
        </Grid>
      </Grid>
    );
  }
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
  onImageLoaded: PropTypes.func,
};

export default withTranslation('translations')(withStyles(classes)(ChatMessage));

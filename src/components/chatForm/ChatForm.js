import React, { Component, createRef } from 'react';
import Grid from '@material-ui/core/Grid';
import * as Icons from '@material-ui/icons';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FilledInput from '@material-ui/core/FilledInput';
import classes from './ChatForm.style';
import { withStyles } from '@material-ui/core/styles';

class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.fileInput = createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { submitForm } = this.props;

    if (!prevProps.values.attachment && this.props.values.attachment) {
      // TODO: temporary solution. We should investigate why it doen't submit right after update
      setTimeout(() => {
        submitForm();
      }, 100);
    }
  }

  handleKeyDown = event => {
    const { submitForm } = this.props;
    // if "Enter" was pressed, submit form
    if (event.keyCode === 13) {
      event.preventDefault();
      submitForm();
    }
  };

  handleAttachmentClick = () => {
    this.fileInput.click();
  };

  handleAttachmentChange = event => {
    const { setFieldValue } = this.props;
    const file = event.target.files[0];
    setFieldValue('attachment', file);
    event.target.value = '';
  };

  render() {
    const { t, values, handleChange, handleSubmit, classes } = this.props;

    return (
      <form className={classes.chatForm} onSubmit={handleSubmit}>
        <Grid container alignItems="center" onClick={this.handleAttachmentClick} className={classes.attachPhoto}>
          <Icons.ImageOutlined />
          <Box ml={1}>
            <MaterialTypography>{t('Attach Photo')}</MaterialTypography>
          </Box>
        </Grid>

        <input
          ref={node => (this.fileInput = node)}
          type="file"
          className={classes.hidden}
          onChange={this.handleAttachmentChange}
        />

        <TextField
          fullWidth
          variant="outlined"
          id="message"
          name="message"
          placeholder={t('Type your message here')}
          value={values.message}
          onChange={handleChange}
          classes={{ root: classes.chatFormText }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icons.Send onClick={handleSubmit} className={classes.sendButton} />
              </InputAdornment>
            ),
          }}
        />
      </form>
    );
  }
}

export default withTranslation('translations')(withStyles(classes)(ChatForm));

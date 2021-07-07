import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import i18n from 'i18next';
import { CloudUpload, ImageUploadWv } from '../../icons/Icons';

class ImagesPicker extends Component {
  constructor(props) {
    super(props);
    this.fileInputNode = createRef();
  }

  handleFileInputChange = event => {
    const files = Array.from(event.target.files);
    this.props.onFileSelect(files);
    event.target.value = '';
  };

  render() {
    const { control } = this.props;

    return (
      <Box
        onClick={() => {
          this.fileInputNode.click();
        }}
        style={{ cursor: 'pointer' }}
      >
        {control}
        <input
          type="file"
          ref={node => (this.fileInputNode = node)}
          style={{ display: 'none' }}
          onChange={this.handleFileInputChange}
          multiple
          accept="image/*"
        />
      </Box>
    );
  }
}

ImagesPicker.defaultProps = {
  items: [],
  control: (
    <Box display="flex" alignItems="center" style={{ fontSize: 14 }}>
      <ImageUploadWv style={{ marginRight: 8, color: '678189' }} />
      {i18n.t('Upload from computer')}
    </Box>
  ),
};

ImagesPicker.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
  control: PropTypes.elementType,
};

export default ImagesPicker;

import React, { Component, createRef } from 'react';
import styles from './ImagePicker.module.scss';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { CloudUploadOutlined } from '../icons/Icons';

class ImagePicker extends Component {
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
    const { t , image } = this.props;

    return (
      <div className={styles.imagesPicker}>
        <div className={styles.imageContent} onClick={() => { this.fileInputNode.click(); }}>

          {image && <div style={{backgroundImage : `url(${image})`}} className={styles.imageBox}> </div>}

          <div className={styles.picker}>
            <CloudUploadOutlined className={styles.addImageIcon} />
            <input
              type="file"
              ref={node => (this.fileInputNode = node)}
              className={styles.hidden}
              onChange={this.handleFileInputChange}
              accept="image/*"
            />
          </div>
          <Typography className={styles.typography}>{t('Upload photo')}</Typography>
        </div>
      </div>
    );
  }
}

ImagePicker.defaultProps = {
  items: [],
};

ImagePicker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  ),
  onFileSelect: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default withTranslation('translations')(ImagePicker);

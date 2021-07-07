import React, { Component, createRef } from 'react';
import styles from './ImagesPicker.module.scss';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import classes from './ImagesPicker.style';
import { Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

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

  handleCheckboxCheck = index => {
    this.props.onCheck(index);
  };

  render() {
    const { t, items, classes } = this.props;


    return (
      <div className={styles.imagesPicker}>
        {items.map((item, key) => {
          const style = {
            backgroundImage: `url(${item.src})`,
          };
          return (
            <div key={key} className={styles.imageWrapper}>
              <div className={styles.imageContent}>
                <div className={styles.image} style={style}>
                  <Fab
                    size="small"
                    color="white"
                    classes={{root: classes.removeButtonRoot}}
                    className={classes.removeButton}
                    onClick={() => this.handleCheckboxCheck(key)}
                  >
                    <Icons.Close color="primary" className={classes.removeButtonIcon} />
                  </Fab>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.imageWrapper}>
          <div className={styles.imageContent}
               onClick={() => {
                 this.fileInputNode.click();
               }}
          >
            <div
              className={styles.picker}
            >
              <Icons.Add fontSize="large" className={classes.addImageIcon} />
              <input
                type="file"
                ref={node => (this.fileInputNode = node)}
                className={styles.hidden}
                onChange={this.handleFileInputChange}
                multiple
                accept="image/*"
              />
            </div>
            <Typography variant="body2" color="primary">{t('Add photo')}</Typography>
          </div>
        </div>
      </div>
    );
  }
}

ImagesPicker.defaultProps = {
  items: [],
};

ImagesPicker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  ),
  onFileSelect: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default withTranslation('translations')(withStyles(classes)(ImagesPicker));

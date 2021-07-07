import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImagesPickerWithControls.module.scss';
import ImagesPicker from './imagesPicker/ImagesPicker';
import ImagePickerGalery from './imagesPickerGallery/ImagePickerGallery';
import Fab from '@material-ui/core/Fab';
import * as Icons from '@material-ui/icons';
import { indexOf } from 'leaflet/src/core/Util';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { PlusWv } from '../icons/Icons';
import MaterialTypography from '../materialTypography/MaterialTypography';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
class ImagesPickerWithControls extends Component {
  state = {
    galleryImageIds: [],
    anchorEl: null,
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log(event.currentTarget);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  getVisibleImages = () => {
    const { currentImages, addImages, deleteImageIds } = this.props;
    let visibleImages = currentImages.filter(image => !deleteImageIds.includes(image.id));
    return [...visibleImages, ...addImages];
  };

  getImagesPickerItems = () => {
    const visibleImages = this.getVisibleImages();
    return visibleImages.map((imageObject, index) => {
      return {
        src: imageObject.src,
      };
    });
  };

  handleFileSelect = (files, params = {}) => {
    const { onChange, addImages, deleteImageIds } = this.props;

    let newImages = files.map(file => {
      return {
        file: file,
        src: URL.createObjectURL(file),
      };
    });
    if (params.hasOwnProperty('galleryIds')) {
      this.setState({ galleryImageIds: [...this.state.galleryImageIds, ...params.galleryIds] });
      newImages = newImages.map((file, index) => {
        return { ...file, galleryId: params[index] };
      });
    }

    const newAddImages = [...addImages, ...newImages];

    onChange(newAddImages, deleteImageIds);
  };

  handleImagesDelete = index => {
    const { onChange, currentImages, addImages, deleteImageIds } = this.props;

    const visibleImages = this.getVisibleImages();
    let deleteImageIdsClone = [...deleteImageIds];
    let addImagesClone = [...addImages];

    const deletedImage = visibleImages[index];
    if (currentImages.includes(deletedImage)) {
      deleteImageIdsClone = [...deleteImageIdsClone.filter(id => id !== deletedImage.id), deletedImage.id];
    } else {
      addImagesClone = addImagesClone.filter(imageObject => imageObject !== deletedImage);
    }
    if (deletedImage.hasOwnProperty('galleryId')) {
      let tmp = [...this.state.galleryImageIds];
      tmp.splice(tmp.indexOf(deletedImage.galleryId), 1);
      this.setState({
        galleryImageIds: tmp,
      });
    }

    onChange(addImagesClone, deleteImageIdsClone);
  };
  ActionBtn = props => {
    const { t } = this.props;
    return (
      <Box
        {...props}
        style={{
          width: 72,
          height: 72,
          borderRadius: 7,
          backgroundColor: 'rgba(103, 129, 137, 0.1)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
          marginRight: 24,
          marginBottom: 24,
        }}
      >
        <PlusWv style={{ color: '#678189' }} />
        <MaterialTypography size="14px">{t('Add photo')}</MaterialTypography>
      </Box>
    );
  };
  render() {
    const { gallery, galleryControl, fileUpload, control, t } = this.props;
    const { ActionBtn } = this;
    return (
      <div className={styles.wrapper}>
        {/*  {fileUpload && <ImagesPicker control={control} onFileSelect={this.handleFileSelect} />}
        {gallery && (
          <ImagePickerGalery
            control={galleryControl}
            selectedImages={this.state.galleryImageIds}
            onChange={this.handleFileSelect}
          />
        )}*/}
        <div className={styles.imagesPicker}>
          {fileUpload && gallery && <ActionBtn onClick={this.handleClick} />}
          {fileUpload && !gallery && <ImagesPicker control={<ActionBtn />} onFileSelect={this.handleFileSelect} />}
          {gallery && !fileUpload && (
            <ImagePickerGalery
              control={<ActionBtn />}
              selectedImages={this.state.galleryImageIds}
              onChange={this.handleFileSelect}
            />
          )}
          {this.getImagesPickerItems().map((item, key) => {
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
                      classes={{ root: styles.removeButtonRoot }}
                      className={styles.removeButton}
                      onClick={() => this.handleImagesDelete(key)}
                    >
                      <Icons.Close color="primary" className={styles.removeButtonIcon} />
                    </Fab>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <ImagePickerGalery
              control={galleryControl}
              selectedImages={this.state.galleryImageIds}
              onChange={this.handleFileSelect}
            />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <ImagesPicker control={control} onFileSelect={this.handleFileSelect} />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

ImagesPickerWithControls.defaultProps = {
  gallery: false,
  fileUpload: true,
};

ImagesPickerWithControls.propTypes = {
  gallery: PropTypes.bool,
  galleryControl: PropTypes.object,
  fileUpload: PropTypes.bool,
  control: PropTypes.object,
  currentImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
    })
  ),
  addImages: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.instanceOf(File).isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  deleteImageIds: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
};

export default withTranslation('translations')(ImagesPickerWithControls);

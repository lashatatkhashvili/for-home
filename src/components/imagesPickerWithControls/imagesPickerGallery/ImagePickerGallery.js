import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CropOriginal } from '@material-ui/icons';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import {
  Box,
  Chip,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  Select,
  MenuItem,
  withStyles,
  Drawer,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ArrowRightWv, FunnelFilter, Check, GalleryUploadWv } from '../../icons/Icons';
import LoaderWrapper from '../../../hoc/loaderWrapper/LoaderWrapper';
import MaterialTypography from '../../materialTypography/MaterialTypography';
import axios from 'axios';
import buildingService from '../../../services/buildingService';
import FsLightbox from 'fslightbox-react';
import withAnalytics from '../../../hoc/withAnalytics/withAnalytics';
import styles from './ImagesPickerGallery.style';
import TextField from '@material-ui/core/TextField';

const ImagePickerGallery = props => {
  const { t, classes, logEvent, control, onChange, selectedImages, multiselect, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    logEvent('User opened WIV gallery');
    if (!galleryImages.length) {
      setIsLoading(true);
      buildingService.fetchGalleryImages().then(data => {
        setGalleryImages(data.images);
        setTags(data.tags);
        setIsLoading(false);
      });
    } else if (isLoading) {
      setIsLoading(false);
    }
    if (filter.length) {
      setFilter([]);
    }
    if (images.length) {
      setImages([]);
    }
    if (lightboxImg.url.length) {
      setLightboxImg({ url: '', key: 'fs', toggle: false });
    }
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const [images, setImages] = useState([]);
  const toggleImageSelect = (image, selected) => {
    if (selected) {
      //remove
      let tmp = [...images];
      let index = tmp.map(el => el.id).indexOf(image.id);
      tmp.splice(index, 1);
      setImages(tmp);
      return;
    }

    if (multiselect) {
      setImages([...images, { id: image.id, name: image.name, url: image.url, fileId: image.fileId }]);
    } else {
      setImages([{ id: image.id, name: image.name, url: image.url, fileId: image.fileId }]);
    }
  };
  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .all(
        images.map(img =>
          axios({
            url: img.url,
            method: 'GET',
            responseType: 'blob', // important
          })
        )
      )
      .then(
        axios.spread((...responses) => {
          handleClose();
          let returnImages = responses.map((response, index) => new File([response.data], images[index].name));
          let imgIds = images.map(el => el.id);
          let fileIds = images.map(el => el.fileId);
          logEvent('User selected images', { count: images.length, image_ids: imgIds });
          onChange(returnImages, { galleryIds: [...imgIds], fileIds: fileIds });
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  };

  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState([]);
  const handleFilterChange = (e, val) => {
    e.stopPropagation();
    e.preventDefault();
    logEvent('User filtered WIV gallery', { count: filter.length, tag_ids: filter.map(el => el.id) });
    setFilter(val);
  };
  const [lightboxImg, setLightboxImg] = useState({ url: '', key: 'fs', toggle: false });
  const showLightbox = (e, img) => {
    e.stopPropagation();
    e.preventDefault();
    logEvent('User viewed an image', { image_id: img.id });
    setLightboxImg({ url: img.url, key: `fs${img.id}`, toggle: !lightboxImg.toggle });
  };
  return (
    <Box>
      <Box onClick={openModal} style={{ cursor: 'pointer' }}>
        {control}
      </Box>
      <Drawer
        ModalProps={{ disableEscapeKeyDown: true }}
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: classes.drawer }}
      >
        <Box>
          <Button
            className={classes.closeButton}
            onClick={() => {
              logEvent('User closed WIV gallery');
              handleClose();
            }}
          >
            <ArrowRightWv style={{ transform: 'rotateY(180deg)', marginRight: 8 }} />
            <span>{t('Cancel')}</span>
          </Button>
        </Box>
        <DialogTitle className={classes.title}>{t('WIV Gallery')}</DialogTitle>

        <DialogContent style={{ minWidth: 520 }}>
          <LoaderWrapper isLoading={isLoading} style={{ height: '210px', maxWidth: '450px' }}>
            <Autocomplete
              size="small"
              multiple
              options={tags}
              getOptionLabel={option => option.name}
              filterSelectedOptions
              displayEmpty={true}
              renderTags={(value, getTagProps) => {
                return value.length ? (
                  value.map((option, index) => (
                    <Chip size="small" variant="outlined" label={option.name} {...getTagProps({ index })} />
                  ))
                ) : (
                  <>
                    {' '}
                    <FunnelFilter /> t('Filter'){' '}
                  </>
                );
              }}
              onChange={handleFilterChange}
              renderInput={params => (
                <TextField {...params} variant="outlined" label="Filter" placeholder={t('Interests')} />
              )}
            />
            <Box display="flex" flex={1} flexWrap="wrap" style={{ margin: '24px -16px 0 -16px', width: 504 }}>
              {galleryImages.map((image, index) => {
                if (filter.length && !filter.some(tag => image.tags.indexOf(tag.id) >= 0)) return;
                if (selectedImages.length && selectedImages.includes(image.id)) return;
                let selected = images.some(el => el.id == image.id);
                return (
                  <Box
                    key={`image${image.id}`}
                    onClick={() => toggleImageSelect(image, selected)}
                    className={`${classes.imgCont} ${selected ? 'selected' : ''}`}
                    style={{ backgroundImage: `url(${image.url})` }}
                  >
                    <Box className={`imgHover`}>
                      <MaterialTypography
                        onClick={e => showLightbox(e, image)}
                        component="span"
                        size="14px"
                        className={classes.imgViewBtn}
                      >
                        {t('view')}
                      </MaterialTypography>
                    </Box>
                    {selected && <Check className={classes.selected} />}
                  </Box>
                );
              })}
            </Box>
          </LoaderWrapper>
        </DialogContent>
        {!isLoading && (
          <DialogActions style={{ justifyContent: 'center' }}>
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              {t('Done')}
            </Button>
          </DialogActions>
        )}
        <FsLightbox
          openOnMount={Boolean(lightboxImg.url)}
          toggler={lightboxImg.toggle}
          key={lightboxImg.key}
          sources={[lightboxImg.url]}
          type="image"
        />
      </Drawer>
    </Box>
  );
};

ImagePickerGallery.defaultProps = {
  control: (
    <Box display="flex" alignItems="center" style={{ fontSize: 14 }}>
      <GalleryUploadWv style={{ marginRight: 8, color: '678189' }} />
      {i18n.t('Chose from gallery')}
    </Box>
  ),
  multiselect: true,
};

ImagePickerGallery.propTypes = {
  control: PropTypes.elementType,
};

export default withTranslation('translations')(withStyles(styles)(withAnalytics(ImagePickerGallery)));

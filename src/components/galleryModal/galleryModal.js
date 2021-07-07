import React , { Component } from 'react';
import {
  Dialog,
  DialogContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { withTranslation } from 'react-i18next';
import styles from './galleryModal.module.scss';
import LoaderWrapper from '../../hoc/loaderWrapper/LoaderWrapper';
import { Close } from '../icons/Icons';
import ImagePicker from '../imagePicker/ImagePicker';
import MaterialTypography from '../materialTypography/MaterialTypography';


class GalleryModal extends Component {

  state = {
    image : null,
    selectedTags : []
  };

  onFileSelect = files => {

    const file = {
      file: files[0],
      src: URL.createObjectURL(files[0])
    };

    this.setState({
      image : file.src
    });

    const images = [];
    images.push(file);

    this.props.setFieldValue('images' , images);


  };

  removeTagFromList = tag => {

    const { selectedTags } = this.state;

    const index = selectedTags.indexOf(tag);

    selectedTags.splice(index, 1);

    this.setState({
      selectedTags
    });

    this.props.setFieldValue('tags' , selectedTags);

  };

  handleSelectTag = e => {
    const { selectedTags } = this.state;

    const tag = e.target.value;

    if(selectedTags.length > 0){
      const index = selectedTags.findIndex(i => i.id === tag.id);

      if(index < 0){
        selectedTags.push(tag);
      }
    }else{
      selectedTags.push(tag);
    }

    this.setState({
      selectedTags
    });

    this.props.setFieldValue('tags' , selectedTags);

  };

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.currentImage){
      this.setState({
        selectedTags : nextProps.currentImage.tags
      });
    }
  }

  render() {
    const { image , selectedTags  } = this.state;
    const {
      t,
      errors,
      isLoading,
      isOpen,
      values,
      touched,
      tags,
      onClose,
      handleSubmit,
      handleChange,
      currentImage
    } = this.props;


    return (
      <Dialog open={isOpen} onClose={onClose}  keepMounted={false}>
        <DialogContent  className={styles.dialogContent}>


          {/*Content*/}
          <LoaderWrapper isLoading={isLoading}>

            {/*=== Header === */}
            <Grid container className={styles.dialogHeader} alignItems="center">
              <Grid xs={6}>
                <h3 className={styles.dialogTitle}>{t('Add Photo')}</h3>
              </Grid>
              <Grid xs={6} className={styles.textRight}>
                <Close onClick={onClose}/>
              </Grid>
            </Grid>

            <Box className={styles.dialogForm}>

              <Box mb={3} className={styles.box}>
                <TextField
                  fullWidth
                  name="name"
                  label={t('Picture Title')}
                  value={values.name}
                  className={styles.input}
                  helperText={touched.name && errors.name}
                  error={touched.name && errors.name}
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      top : '-6px'
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '10.5px 14px',
                    },
                  }}
                />
              </Box>
              <Box mb={3} className={styles.box}>

                <Select
                  className={styles.input}
                  fullWidth
                  value={0}
                  name="filter"
                  onChange={this.handleSelectTag}
                  variant="outlined"
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height : 40
                  }}
                >
                  <MenuItem value={0}>{t('Picture Tags')}</MenuItem>
                  {tags && tags.map((option) => (
                    <MenuItem key={option.id} value={option}>
                      {option.tag}
                    </MenuItem>
                  ))}
                </Select>


                  <List dense disablePadding className={styles.listWrapper}>
                    {selectedTags && selectedTags.length > 0 && selectedTags.map(tag => (
                      <ListItem disableGutters className={styles.listItem}>
                        <Box className={styles.listItemBox}>

                          <ListItemText className={styles.listItemText}>
                            <MaterialTypography size="12px" weight={300}>
                              {tag.tag}
                            </MaterialTypography>
                          </ListItemText>
                          <ListItemIcon className={styles.hiddenClose} style={{ minWidth: '20px' }}>
                            <Close onClick={() => this.removeTagFromList(tag)}/>
                          </ListItemIcon>
                        </Box>
                      </ListItem>
                    ))}
                  </List>

              </Box>
              <Box mb={3} className={styles.box}>
                {currentImage ? (
                  <div style={{backgroundImage : `url(${process.env.REACT_APP_API_URL}/files/${currentImage.file_id})`}} className={styles.imageBox}> </div>
                ) : <ImagePicker onFileSelect={this.onFileSelect} image={image}/>}

              </Box>
              <Box mb={3} className={[styles.box , styles.textRight]}>
                {currentImage ? (
                  <button onClick={() => handleSubmit(currentImage.id)}>{t('UPDATE')}</button>
                ) : (
                  <button onClick={handleSubmit}>{t('PUBLISH')}</button>
                )}
              </Box>

            </Box>

          </LoaderWrapper>

        </DialogContent>
      </Dialog>
    );
  }
}

export default withTranslation('translations')(GalleryModal);

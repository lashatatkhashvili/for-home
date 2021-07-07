import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainLayoutContainer from '../../components/mainLayout/MainLayoutContainer';
import LoaderWrapper from '../../hoc/loaderWrapper/LoaderWrapper';
import styles from './Gallery.module.scss';
import {
  Grid,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  Select,
} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { FunnelFilter, Search } from '../../components/icons/Icons';
import {
  getGalleryItemsAction ,
  createGalleryItemAction ,
  deleteGalleryImageAction
} from '../../reducers/gallery/gallery.actions';
import {
  selectGalleryImages,
  selectGalleryName,
  selectGalleryTags,
  selectIsFetchingGallery,
  selectIsCreatingGallery

} from '../../reducers/gallery/gallery.selectors';
import GalleryModal from '../../components/galleryModal/galleryModalContainer';

class Gallery extends Component {

  state = {
    search : '',
    filter : 0,
    isOpenGalleryModal : false,
    currentImage : null
  };

  componentDidMount() {
    this.props.getGalleryItemsAction();
  }

  handleChangeInput = async e => {
    await this.setState({
      [e.target.name] : e.target.value
    })

    this.handleFilterData();
  };

  handleFilterData = () => {
    const { images } = this.props;
    const { search , filter } = this.state;

    let result = images.filter(({tags, name}) => {
        return filter ?
              tags.some(e => e.id === filter) &&  name.toLowerCase().includes(search.toLowerCase())
              :
              name.toLowerCase().includes(search.toLowerCase())
      });

    this.setState({
      images : result
    })
  }

  handleChangeGalleryeModal = img => {
    this.setState(prevState => ({
      isOpenGalleryModal: !prevState.isOpenGalleryModal,
      currentImage : img && img.id ? img : null
    }));
  };

  render() {

    const { t } = this.props;
    const { search , filter , isOpenGalleryModal , currentImage} = this.state;
    const {
      isFetchingGallery ,
      createGalleryItemAction ,
      isCreatingGallery ,
      deleteGalleryImageAction,
      tags ,
      name
    } = this.props;

    const isLoading = isFetchingGallery || isCreatingGallery;

    const images = this.state.images ? this.state.images : this.props.images;

    return (
      <MainLayoutContainer>

        {isOpenGalleryModal && (
          <GalleryModal
            isOpen={isOpenGalleryModal}
            tags={tags}
            onClose={this.handleChangeGalleryeModal}
            createGalleryItemAction={createGalleryItemAction}
            currentImage={currentImage}
          />
        )}

        <LoaderWrapper isLoading={isLoading}>
          <div className={styles.galleryBox}>
            <div className={styles.galleryContainer}>
            {/*=== Header === */}
            <Grid container className={styles.galleryHeader}>
              <Grid xs={6}>
                <h3>{name ? name : t('Gallery')}</h3>
              </Grid>
              <Grid xs={6} className={styles.textRight}>
                <button onClick={this.handleChangeGalleryeModal}>{t('ADD PHOTOS')}</button>
              </Grid>
            </Grid>

            {/*=== Content === */}
            <Box className={styles.galleryContent}>

              {/*=== Search && Filter === */}
              <Grid xs={12} container className={styles.galleryContentForms}>

                <Grid xs={8} className={styles.searchBox}>
                  <FormControl fullWidth  variant="outlined" className={styles.input}>
                    <OutlinedInput
                      name="search"
                      value={search}
                      placeholder={t('Search')}
                      onChange={this.handleChangeInput}
                      startAdornment={<InputAdornment position="start">
                        <Search color="#8b846f"/>
                      </InputAdornment>}
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
                  </FormControl>
                </Grid>
                <Grid xs={4} className={styles.filterBox}>
                  <FunnelFilter className={styles.filterIcon} />
                  <Select
                    className={[styles.input , styles.select]}
                    fullWidth
                    value={filter}
                    name="filter"
                    onChange={this.handleChangeInput}
                    variant="outlined"
                    floatingLabelStyle={{
                      top: '-6px',
                    }}
                    style={{
                      height : 40
                    }}
                  >
                    <MenuItem value={0}>{t('Filter')}</MenuItem>
                    {tags && tags.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.tag}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              {/*=== Templates === */}
              <Grid xs={12} container className={styles.galleryTemplates}>
                {images && images.length > 0 && images.map(img => {
                  return (
                    <Grid xs={6} lg={3} md={4} className={styles.templateBox}>
                      <Box className={styles.templateImageContainer}>
                        <img src={`${process.env.REACT_APP_API_URL}/files/${img.file_id}`} />

                        <Grid container className={styles.templateBoxActions} alignItems="center">
                          <Grid xs={6} className={styles.templateBoxActionsLeft} onClick={() => this.handleChangeGalleryeModal(img)}>
                            <p className={styles.templateEditBtn}>{t('EDIT')}</p>
                          </Grid>
                          <Grid xs={6} className={styles.templateBoxActionsRight} onClick={() => deleteGalleryImageAction(img.id)}>
                            <p className={styles.templateDeleteBtn}>{t('DELETE')}</p>
                          </Grid>
                        </Grid>
                        <Box className={styles.templateBoxOverlay}></Box>
                      </Box>
                      <h3>{img.name}</h3>
                    </Grid>

                  )
                })}
              </Grid>


            </Box>
          </div>
          </div>
        </LoaderWrapper>

      </MainLayoutContainer>

    );
  }
}

const mapStateToProps = state => {
  return {
    isFetchingGallery : selectIsFetchingGallery(state),
    isCreatingGallery : selectIsCreatingGallery(state),
    images : selectGalleryImages(state),
    name : selectGalleryName(state),
    tags : selectGalleryTags(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGalleryItemsAction : () => dispatch(getGalleryItemsAction()),
    deleteGalleryImageAction : id => dispatch(deleteGalleryImageAction(id)),
    createGalleryItemAction : (data , current) => dispatch(createGalleryItemAction(data , current)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation('translations')(Gallery));

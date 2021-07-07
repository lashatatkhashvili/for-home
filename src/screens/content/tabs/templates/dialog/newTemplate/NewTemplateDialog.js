import React, { Component } from 'react';
import { Box, Dialog, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import styles from './NewTemplateDialog.module.scss';
import { withTranslation } from 'react-i18next';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import MaterialButton from '../../../../../../components/materialButton/MaterialButton';
import { Close, DotsWv } from '../../../../../../components/icons/Icons';
import ImagesPickerWithControls from '../../../../../../components/imagesPickerWithControls/ImagesPickerWithControls';
import { getPublicFileUrl } from '../../../../../../utils/helpers';
import ErrorMessage from '../../../../../../components/errorMessage/ErrorMessage';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import RichTextEditor from '../../../../../../components/richTextEditor/RichTextEditor';
import FormHelperText from '@material-ui/core/FormHelperText';
import templateService from '../../../../../../services/templateService';
import { LANGUAGES } from '../../../../../../constants/locales';
import { CONTENT_TEMPLATE_TYPES } from '../../../../../../constants/misc';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
class NewTemplateDialog extends Component{

  state = {
    images: [],
    addImages: [],
    deleteImageIds: [],
    currentTemplate: {},
    tagOptions: [],
    tagsLoading: false,
  };

  componentDidMount() {
    const { currentTemplate, getTemplatesCategoriesAction, getMilestonesAction , milestones } = this.props;
    getTemplatesCategoriesAction();
    if(!Boolean(milestones.length))
      getMilestonesAction();
    if (currentTemplate && currentTemplate.images) {
      const currentImages = currentTemplate.images.map(i => {
        return {
          id: i.id,
          src: getPublicFileUrl(i.file_id),
        };
      });
      this.setState({
        addImages: currentImages,
      });
    }

    // if (currentTemplate && values.type === CONTENT_TEMPLATE_TYPES.announcements) {
    //   this.setState({ isAnnouncementPost: true });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { values } = this.props;
    const { announcements } = CONTENT_TEMPLATE_TYPES;

    // if (prevProps.values.type !== announcements && values.type === announcements) {
    //   this.setState({ isAnnouncementPost: true });
    // }
    //
    // if (prevProps.values.type === announcements && values.type !== announcements) {
    //   this.setState({ isAnnouncementPost: false });
    // }
  }

  getTags = search => {
    const { currentBuildingId } = this.props;
    if (search.length === 0) return [];
    templateService.getPostTags({ buildingId: currentBuildingId, hashtag: search }).then(response => {
      this.setState({ tagOptions: response, tagsLoading: false });
    });
  };
  handleTagsChange = (event, value, reason) => {
    const { setFieldValue, values } = this.props;
    setFieldValue('tags', value);
    return true;
  };
  handleFileSelect = (addImages, deleteImageIds) => {
    const { setFieldValue } = this.props;

    this.setState({
      addImages,
      deleteImageIds,
    });

    setFieldValue('images', addImages);
  };

  handleSubmitForm = type => {
    const { values, setFieldValue, handleSubmit, errors } = this.props;

    if (type) {
      setFieldValue('published_at', Date.now());

      // if (values.type === CONTENT_TEMPLATE_TYPES.announcements && Object.keys(errors).length === 0) {
      //   this.setState({ isCommunitiesModalOpen: true });
      //   return;
      // }
    }

    handleSubmit();
  };

  getAnnouncementType = () => {
    const { t } = this.props;

    return [
      { id: 'MARKETPLACE_SERVICE', label: t('Marketplace service') },
      { id: 'MARKETPLACE_CATEGORY', label: t('Marketplace category') },
    ];
  };

  handleCloseCommunityModal = () => {
    this.setState({ isCommunitiesModalOpen: false });
  };

  handleChangeMilestones = e => {
    // console.log(e.target.value , 'e.target.value')
    this.props.setFieldValue('milestones' , [...e.target.value])
  }

  getStyles(name, personName) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? 300
          : 500,
    };
  }

  render() {
 
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

    const {
      t,
      isOpen,
      onClose,
      values,
      handleChange,
      touched,
      errors,
      setFieldValue,
      currentTemplate,
      categories,
      milestones,
    } = this.props;

    const {
      addImages,
      deleteImageIds
    } = this.state;

    // console.log(values.milestones , milestones , 'agagvwvwd')
    return(
      <Dialog open={isOpen}  className={styles.dialogBox} maxWidth={1056} onClose={onClose}>
        <Box className={styles.dialogBoxContainer}>

          {/*   ==== Header === */}
          <Box className={styles.dialogBoxHeader}>
            <h3>{t('Create Your Post')}</h3>
            <Close className={styles.closeIcon} onClick={onClose}/>
          </Box>



          {/*   === Content ====  */}
          <Grid container className={styles.dialogBoxContent}>

            {/*  === LeftSide ===   */}
            <Grid xs={4} className={styles.dialogContainerLeftSide} >

              <h3 className={styles.contentHeading}>{t('Settings')}</h3>

              {/*  === Title === */}
              <Box mb={3}>
                <TextField
                  fullWidth
                  id="eventTitle"
                  name="title"
                  label={t('Template Title')}
                  value={values.title}
                  className={styles.input}
                  helperText={touched.title && errors.title}
                  error={touched.title && errors.title}
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

              {/*  === Valid expires_at === */}
              <Box mb={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  disablePast
                  name="expires_at"
                  label={t('Valid Until')}
                  format="DD/MM/YYYY"
                  value={values.expires_at}
                  onChange={date => setFieldValue('expires_at', date)}
                  inputVariant="outlined"
                  minDateMessage={t("Minimum date should be present-day")}
                  error={touched.expires_at && errors.expires_at }
                  className={styles.input}
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
                </MuiPickersUtilsProvider>
              </Box>

              {/*  === Post Type === */}
              <Box mb={3}>
                <Select
                  fullWidth
                  value={values.type}
                  onChange={handleChange}
                  name="type"
                  error={touched.type && errors.type}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height : 40
                  }}
                >
                  <MenuItem value={t('Post')}>{t('Post')}</MenuItem>
                  <MenuItem value={t('Event')}>{t('Event')}</MenuItem>

                </Select>
              </Box>


              {/*  === Category === */}
              <Box mb={3}>
                <Select
                  fullWidth
                  value={values.category}
                  onChange={handleChange}
                  name="category"
                  error={touched.category && errors.category}
                  helperText={touched.category && errors.category}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height : 40
                  }}
                >
                  <MenuItem value={0}>{t('Category')}</MenuItem>
                  {categories && Boolean(categories.length) && categories.map(cat => {
                    return <MenuItem value={cat.id}>{cat.name}</MenuItem>
                  })}

                </Select>
                {errors.category && (
                  <ErrorMessage>
                    {errors.category}
                  </ErrorMessage>
                )}
              </Box>

              {/*  === Language === */}
              <Box mb={3}>
                <Select
                  fullWidth
                  value={values.locale}
                  onChange={handleChange}
                  name="locale"
                  error={touched.locale && errors.locale}
                  helperText={touched.locale && errors.locale}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height : 40
                  }}
                >
                  <MenuItem value={0}>{t('Language')}</MenuItem>
                  {Object.keys(LANGUAGES).map(key  => {
                    return <MenuItem value={key}>{LANGUAGES[key]}</MenuItem>;
                  })}

                </Select>
                {errors.category && (
                  <ErrorMessage>
                    {errors.category}
                  </ErrorMessage>
                )}
              </Box>

              {/*  ===  Milestone === */  }
              <Box mb={3}>
                  <FormControl style={{width : '100%'}}>
                    <InputLabel id="demo-mutiple-chip-label">Milestones</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={values.milestones}
                        onChange={this.handleChangeMilestones}
                        input={<Input id="select-multiple-chip"/>}
                        renderValue={(selected) => (
                          <div className={styles.chips}>
                            {selected.map((value) => (
                              <Chip key={value.id} label={value.name} className={styles.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                    >
                    {milestones && Boolean(milestones.length) && milestones.map((milestone) => (
                      <MenuItem key={milestone.id} value={milestone} style={this.getStyles(milestone, values.milestones)}>
                        {milestone.name}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
              </Box>
            </Grid>
            
              {/*  === RightSide ===   */}
            <Grid xs={8} className={styles.dialogContainerRightSide}>
                <h3 className={styles.contentHeading}>{t('Settings')}</h3>

                {/* === Content Box === */}

                <Box className={styles.contentBox}>
                  {/*==== Author Box ==== */}
                  <Grid className={styles.authorBox} container>
                    <Grid xs={2}>
                      <Box className={styles.adminAvatar}>
                        <span>N</span>
                      </Box>
                    </Grid>
                    <Grid xs={6} className={styles.authorInfo}>
                      <p>System Admin</p>
                      <span>Today 12:45 AM</span>
                    </Grid>
                    <Grid xs={4} className={styles.textRight}>
                      <DotsWv className={styles.authorDots} />
                    </Grid>
                  </Grid>

                  {/*=== Editor === */}
                  {/* <Box mb={3}>
                  <textarea
                    name="description"
                    value={values.description}
                    className={styles.textarea}
                    style={{
                      borderColor : touched.description && errors.description ? '#f44336' : 'rgba(46, 53, 55, 0.2)'
                    }}
                    onChange={handleChange}
                  ></textarea>
                  {
                    touched.description && errors.description && (
                      <ErrorMessage>{errors.description}</ErrorMessage>
                    )
                  }

                </Box>*/}
                  <Box style={{ height: 248 }}>
                    <RichTextEditor
                      height={248}
                      value={values.description}
                      onChange={e => setFieldValue('description', e.target.getContent())}
                    />
                  </Box>
                  {touched.description && errors.description && (
                    <FormHelperText error>{errors.description}</FormHelperText>
                  )}
                  <Box my={3}>
                    <Autocomplete
                      multiple
                      freeSolo
                      selectOnFocus
                      loading={this.state.tagsLoading}
                      value={values.tags}
                      onChange={this.handleTagsChange}
                      onInputChange={(event, newInputValue) => {
                        this.getTags(newInputValue);
                      }}
                      renderTags={(values, props) => {
                        return values.map((val, key) => (
                          <Chip
                            className={styles.autocompleteTags}
                            key={key}
                            size="small"
                            label={`#${val}`}
                            onDelete={() => {
                              setFieldValue(
                                'tags',
                                values.filter(el => el !== val)
                              );
                            }}
                            deleteIcon={<Close style={{ color: '#678189' }} />}
                          />
                        ));
                      }}
                      size="small"
                      options={this.state.tagOptions}
                      filterSelectedOptions
                      renderInput={params => (
                        <TextField {...params} variant="outlined" fullWidth size="small" placeholder="Hashtags" />
                      )}
                    />
                  </Box>

                  {/*   ==== Images  ====  */}
                  <Box>
                    <ImagesPickerWithControls
                      title={t('images')}
                      currentImages={[]}
                      addImages={addImages}
                      deleteImageIds={deleteImageIds}
                      onChange={this.handleFileSelect}
                      errorText={touched.images && errors.images && errors.images}
                      gallery={true}
                    />
                    {touched.images && errors.images && <FormHelperText error>{errors.images}</FormHelperText>}
                  </Box>

                  {/*/!*=== Content Footer === *!/*/}
                  {/*<Box className={styles.contentFooter}>*/}
                  {/*  <Box className={styles.greyRounded}></Box>*/}
                  {/*  <Box className={styles.greyRounded}></Box>*/}
                  {/*</Box>*/}
                </Box>
              </Grid>

            {/*  === Footer ===    */}
            <Grid container item justify="flex-end" className={styles.dialogBoxFooter}>
              {currentTemplate && currentTemplate.id ? (
                <MaterialButton
                  onClick={() => this.handleSubmitForm()}
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={styles.saveButton}
                >
                  {t('SAVE CHANGES')}
                </MaterialButton>
              ) : (
                <>
                  <MaterialButton
                    onClick={() => this.handleSubmitForm()}
                    variant="outlined"
                    size="large"
                    style={{ marginRight: 24 }}
                    className={styles.submitButton}
                  >
                    {t('SAVE')}
                  </MaterialButton>
                  <MaterialButton
                    onClick={() => this.handleSubmitForm(true)}
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={styles.submitButton}
                  >
                    {t('Publish')}
                  </MaterialButton>
                </>
              )}
            </Grid>
          </Grid>
          </Box>
        </Dialog>
    );
  }
}

export default withTranslation('translations')(NewTemplateDialog);

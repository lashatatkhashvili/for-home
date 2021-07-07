import React, { useEffect, useRef, useState } from 'react';
import { Box, Dialog, DialogContentText, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MaterialTypography from '../../../../../../../components/materialTypography/MaterialTypography';
import CloseButton from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './CommunityModal.style';
import { useTranslation } from 'react-i18next';
import DialogContent from '@material-ui/core/DialogContent';
import Checkbox from '@material-ui/core/Checkbox';
import { CheckboxCheckedWv, CheckboxWv } from '../../../../../../../components/icons/Icons';
import buildingService from '../../../../../../../services/buildingService';
import LoaderWrapper from '../../../../../../../hoc/loaderWrapper/LoaderWrapper';
import useDebounce from '../../../../../../../hooks/useDebounce';
import DialogActions from '@material-ui/core/DialogActions';
import styles from '../NewTemplateDialog.module.scss';
import MaterialButton from '../../../../../../../components/materialButton/MaterialButton';
import { useDispatch } from 'react-redux';
import { createAnnouncement } from '../../../../../../../reducers/template/template.actions';

const CommunityModal = props => {
  const { isOpen, onClose, onCloseOuter, values } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  const descriptionElementRef = useRef(null);
  const [communities, setCommunities] = useState([]);
  const [isFetchingCommunities, setIsFetchingCommunities] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  // const [isCreatingAnnouncement, setIsCreatingAnnouncement] = useState(false);

  const [checkedCommunities, setCheckedCommunities] = useState([]);

  let metaType = 'serviceId';
  if (values.metaType === 'CATEGORY') metaType = 'categoryId';

  useEffect(() => {
    buildingService
      .fetchBuildingBy(metaType, values.metaValue)
      .then(response => {
        setCommunities(
          response.filter(community => community.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
        );
        setIsFetchingCommunities(false);
      })
      .catch(err => setIsFetchingCommunities(false));
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  const handleCheckCommunity = communityId => {
    const isChecked = checkedCommunities.includes(communityId);

    const checkedArray = isChecked
      ? checkedCommunities.filter(community => community !== communityId)
      : [...checkedCommunities, communityId];

    setCheckedCommunities(checkedArray);
  };

  const handleSubmit = () => {
    const formValues = {
      ...values,
      meta: [{ key: values.metaType, value: values.metaValue }],
      buildingIds: checkedCommunities,
    };

    // setIsCreatingAnnouncement(true);

    dispatch(createAnnouncement(formValues));

    onClose();
    onCloseOuter();
  };

  const handleToggleSelectCommunities = () => {
    if (communities.length === checkedCommunities.length) {
      setCheckedCommunities([]);
    } else {
      setCheckedCommunities(communities.map(community => community.id));
    }
  };

  return (
    <Dialog
      open={isOpen}
      fullWidth
      onClose={onClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle disableTypography className={classes.dialogTitle} id="scroll-dialog-title">
        <Grid container justify="space-between" alignItems="center" wrap="nowrap">
          <MaterialTypography size="16px" weight={500}>
            {t('Select communities')}
          </MaterialTypography>

          <CloseButton className={classes.closeButton} onClick={onClose} />
        </Grid>
      </DialogTitle>
      <LoaderWrapper
        isLoading={isFetchingCommunities}
        style={{ height: '410px' }}
        className={classes.communityModalLoaderWrapper}
      >
        <DialogContent dividers className={classes.dialogContent}>
          <DialogContentText
            component="div"
            style={{ opacity: 1, outline: 'none' }}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box mb={3}>
              <TextField
                fullWidth
                id="searchQuery"
                name="searchQuery"
                label={t('Search...')}
                size="small"
                value={searchQuery}
                variant="outlined"
                onChange={event => setSearchQuery(event.target.value)}
              />
            </Box>

            <Box mb={1}>
              <MaterialTypography
                size="18px"
                fontWeight={500}
                style={{ cursor: 'pointer', textTransform: 'capitalize' }}
                onClick={handleToggleSelectCommunities}
              >
                {checkedCommunities.length === communities.length ? t('Clear all') : t('Select all')}
              </MaterialTypography>
            </Box>

            {Boolean(communities.length) ? (
              communities.map(community => (
                <Grid key={community.id} container alignItems="center" wrap="nowrap" style={{ marginBottom: '16px' }}>
                  <Box mr={3}>
                    <Checkbox
                      id={community.id}
                      icon={<CheckboxWv />}
                      checkedIcon={<CheckboxCheckedWv />}
                      checked={checkedCommunities.includes(community.id)}
                      onChange={() => handleCheckCommunity(community.id)}
                      // name="notifyMobile"
                    />
                  </Box>

                  <Box mr={3} component="label" htmlFor={community.id}>
                    <img
                      src={community.logo}
                      alt=""
                      style={{ width: '60px', height: '40px', borderRadius: '8px', objectFit: 'contain' }}
                    />
                  </Box>

                  <MaterialTypography size="16px" weight={500} component="label" htmlFor={community.id}>
                    {community.name}
                  </MaterialTypography>
                </Grid>
              ))
            ) : (
              <Grid container alignItems="center" justify="center" style={{ marginBottom: '20px' }}>
                <MaterialTypography size="24px">{t('No any communities')}</MaterialTypography>
              </Grid>
            )}
          </DialogContentText>
        </DialogContent>

        {Boolean(checkedCommunities.length) && (
          <DialogActions>
            <MaterialButton
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
              size="large"
              className={styles.submitButton}
            >
              {t('Publish')}
            </MaterialButton>
          </DialogActions>
        )}
      </LoaderWrapper>
    </Dialog>
  );
};

export default CommunityModal;

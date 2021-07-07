import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import { Menu, MenuItem } from '@material-ui/core';
import classes from './SpecialDays.style';
import { selectSurveys, selectSurveysPaginationData } from '../../../../reducers/surveys/surveys.selectors';
import MaterialButton from '../../../../components/materialButton/MaterialButton';
import MaterialTypography from '../../../../components/materialTypography/MaterialTypography';
import SpecialHeader from './SpecialHeader';
import { fetchSpecialDays } from '../../../../reducers/specialDays/specialDays.actions';
import LoaderWrapper from '../../../../hoc/loaderWrapper/LoaderWrapper';
import NoAnyItems from '../../../../components/noAnyItems/NoAnyItems';
import NoSurveysImage from '../../../../assets/images/survey_list_empty.svg';
import MaterialPagination from '../../../../components/materialPagination/MaterialPagination';
import { changeSurveysCurrentPage } from '../../../../reducers/surveys/surveys.actionCretors';
import NewSPecialDayDialog from './dialog/newSpecialDay/NewSpecialDayDialog';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from '../../Content.module.scss';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { MoreHoriz } from '@material-ui/icons';
import ConfirmationModal from '../../../../components/confirmationModal/ConfirmationModal';
import trashIcon from '../../../../assets/images/icons/trash-icon.svg';

const SpecialDays = props => {
  const { t, classes } = props;
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenNewSurveyDialog, setIsOpenNewSurveyDialog] = useState(false);
  const surveys = useSelector(selectSurveys);
  const { total, currentPage } = useSelector(selectSurveysPaginationData);
  const dispatch = useDispatch();
  const [anchorEl, setAnchor] = useState(null);
  const [row, setRow] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [currentSurvey, setCurrentSurvey] = useState(null);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleFetchSurvey = useCallback(
    async page => {
      try {
        await dispatch(fetchSpecialDays(null, page));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage, dispatch]
  );

  useEffect(() => {
    handleFetchSurvey(currentPage);
  }, [handleFetchSurvey, currentPage, location]);

  const changeCurrentPage = (event, page) => {
    dispatch(changeSurveysCurrentPage(page + 1));
  };

  const handleRowClick = useCallback(
    template => {
      const survey = template && template.id ? template : {};
      setIsOpenNewSurveyDialog(true);
      setCurrentSurvey(survey);
    },
    [surveys, dispatch]
  );

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setAnchor(null);
  };

  const renderMoreOptionsMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={!!anchorEl}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={() => handleRowClick(row)}>{t('Edit')}</MenuItem>
        <MenuItem onClick={() => handleToggleDeleteModal(deleteItemId)}>{t('Delete')}</MenuItem>
      </Menu>
    );
  };

  const handleClose = () => {
    setAnchor(null);
    setRow(null);
    setDeleteItemId(null);
    setCurrentSurvey(null);
  };
  const handleClickListItem = (event, row) => {
    setAnchor(event.currentTarget);
    setRow(row);
    setDeleteItemId(row.id);
  };
  const handleCloseModal = () => {
    handleClose();
    setIsOpenNewSurveyDialog(false);
  };
  const deleteSurveyAction = async id => {
    //await dispatch(deleteSurvey(id));
    setIsOpenDeleteModal(false);
  };

  return (
    <>
      {isOpenNewSurveyDialog && (
        <NewSPecialDayDialog
          isOpen={isOpenNewSurveyDialog}
          onClose={handleCloseModal}
          currentSurvey={currentSurvey}
          closeAnchor={() => setIsOpenNewSurveyDialog(false)}
        />
      )}
      {isOpenDeleteModal && (
        <ConfirmationModal
          isOpen={true}
          onClose={() => setIsOpenDeleteModal(false)}
          onConfirm={() => deleteSurveyAction(deleteItemId)}
          closeTitle={t('No')}
          confirmTitle={t('Yes')}
          contentText={t('Are you sure you want to delete this template?')}
          image={trashIcon}
        />
      )}
      <Box width="100%" pb={3}>
        <SpecialHeader>
          <MaterialTypography className={classes.containerText}>{t('Special Days')}</MaterialTypography>

          <Box display="flex">
            {/* <Box mr={4}>
                  <TextField
                    placeholder={t('Search')}
                    variant="outlined"
                    // onChange={this.handleSearch}
                    // onKeyUp={this.handleSearch}
                    value={''}
                    InputProps={{
                      startAdornment: <Icons.Search style={{ opacity: '0.8' }} />,
                      classes: { input: classes.containerInput },
                    }}
                  />
                </Box> */}
            <Box>
              <MaterialButton
                className={classes.containerButton}
                onClick={() => setIsOpenNewSurveyDialog(true)}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
              >
                {t('Create special day')}
              </MaterialButton>
            </Box>
          </Box>
        </SpecialHeader>
        <LoaderWrapper isLoading={isLoading} style={{ height: '410px' }}>
          {surveys.length ? (
            <>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={styles.headerRow}>
                    <TableCell>{t('Title')}</TableCell>
                    <TableCell>{t('Start day')}</TableCell>
                    <TableCell>{t('End date')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {surveys &&
                    surveys.length > 0 &&
                    surveys.map(row => (
                      <TableRow key={row.title} className={styles.tableRow}>
                        <TableCell className={styles.paddingL}>{row.title}</TableCell>
                        <TableCell>
                          <Box className={classes.tableCell}>
                            <Box
                              style={{
                                background: row.expired ? '#EFF2F3' : row.isPublished ? '#5EBE84' : '#F8D0B6',
                                color: row.expired ? '#A3B2B8' : '#2e3537',
                              }}
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              className={classes.statusWrapper}
                            >
                              {row.expired ? t('Expired') : row.isPublished ? t('Live') : t('Draft')}
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>{row.participants}</TableCell>

                        <Box className={styles.deleteDots}>
                          <MoreHoriz
                            color="#7b99ae"
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={e => handleClickListItem(e, row)}
                          />
                        </Box>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <Box mt={2}>
                <MaterialPagination totalData={total} currentPage={currentPage} onChangePage={changeCurrentPage} />
              </Box>
              {renderMoreOptionsMenu()}
            </>
          ) : (
            <Box pt={2} width="100%">
              <NoAnyItems
                text={t("You haven't created any survey yet")}
                secondaryText={t(
                  'Know your members better and gather insights by creating amazing surveys for your community'
                )}
                image={NoSurveysImage}
              />
            </Box>
          )}
        </LoaderWrapper>
      </Box>
    </>
  );
};

export default withRouter(withTranslation('translations')(withStyles(classes)(SpecialDays)));

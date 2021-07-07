import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import styles from '../../Content.module.scss';
import LoaderWrapper from '../../../../hoc/loaderWrapper/LoaderWrapper';
import { Box, Button, Grid, Menu, MenuItem } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NewPostDialog from './dialog/newAnnoucement/NewAnnoucementDialogContainer';
import { connect } from 'react-redux';
import { MoreHoriz } from '@material-ui/icons';
import ConfirmationModal from '../../../../components/confirmationModal/ConfirmationModal';
import trashIcon from '../../../../assets/images/icons/trash-icon.svg';
import { getAnnoucementsAction , deleteAnnoucementAction } from '../../../../reducers/annoucement/annoucement.actions';
import { selectAnnoucements , selectIsCreatingAnnoucement , selectIsFetchingAnnoucement , selectTotal , selectCurrentPage} from '../../../../reducers/annoucement/annoucement.selectors';
import MaterialPagination from '../../../../components/materialPagination/MaterialPagination';


class Annoucements extends Component{

  state = {
    isOpenNewTemplateDialog : false,
    isOpenStatusDialog : false,
    isOpenDeleteModal : false,
    currentTemplate : {},
    anchorEl: null,
    deleteItemId : null
  };

  onCloseNewTemplateDialog = template => {
    const currentTemplate = template && template.id ? template : {};
    this.setState(prevState => ({
      isOpenNewTemplateDialog: !prevState.isOpenNewTemplateDialog,
      currentTemplate
    }))
  };

  onCloseTemplateStatusDialog = template => {
    const currentTemplate = template && template.id ? template : {};
    this.setState(prevState => ({
      isOpenStatusDialog: !prevState.isOpenStatusDialog,
      currentTemplate
    }))
  };

  handleToggleDeleteModal = () => {
    this.setState(prevState => ({
      isOpenDeleteModal : !prevState.isOpenDeleteModal,
      anchorEl: null,
    }))
  }

  componentDidMount() {
    this.props.getAnnoucements();
  }

  handleClickListItem = (event , row) => {
    this.setState({
      anchorEl: event.currentTarget,
      deleteItemId : row.id,
      row
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      deleteItemId : null,
      row : null
    });
  };

  deleteTemplate = () => {
    this.props.deleteAnnoucement(this.state.deleteItemId);
    this.setState({
      isOpenDeleteModal : false
    })
  }

  renderMoreOptionsMenu = () => {
    const { t } = this.props;
    const { anchorEl , deleteItemId , row } = this.state;
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
        onClose={this.handleClose}
        keepMounted
      >
        <MenuItem
          onClick={
            () => this.onCloseNewTemplateDialog(row)
          }>
          {t('Edit')}
        </MenuItem>
        <MenuItem
          onClick={
            () => this.handleToggleDeleteModal(deleteItemId)
          }>
          {t('Delete')}
        </MenuItem>
      </Menu>
    );
  };

  handlePageChange = (event, page) => {
    const { getAnnoucements } = this.props;
    getAnnoucements(page + 1);
  };

  render() {


    const {
      t,
      annoucements,
      isFetchingAnnoucements,
      isCreatingAnnoucement,
      totalData,
      currentPage
    } = this.props;

    const {
      isOpenNewTemplateDialog ,
      isOpenDeleteModal,
      currentTemplate,
    } = this.state;

    const {
      onCloseNewTemplateDialog ,
    } = this;

    const isLoading = isFetchingAnnoucements || isCreatingAnnoucement;


    return (
      <LoaderWrapper isLoading={isLoading}>
        {isOpenNewTemplateDialog && (
          <NewPostDialog
            isOpen={isOpenNewTemplateDialog}
            onClose={onCloseNewTemplateDialog}
            currentTemplate={currentTemplate}
            closeAnchor={this.handleClose}
          />
        )}

        {isOpenDeleteModal && (
          <ConfirmationModal
            isOpen={true}
            onClose={this.handleToggleDeleteModal}
            onConfirm={this.deleteTemplate}
            closeTitle={t('No')}
            confirmTitle={t('Yes')}
            contentText={t('Are you sure you want to delete this Annoucement?')}
            image={trashIcon}
          />
        )}
        <Box>
          <Grid container className={styles.tabContentHeader} alignItems="center">
            <Grid xs={6}>
              <h2>{t('Annoucements')}</h2>
            </Grid>
            <Grid xs={6} className={styles.newTemplateBox}>
              <Button onClick={onCloseNewTemplateDialog}>{t('NEW ANNOUCEMENT')}</Button>
            </Grid>
          </Grid>
          <Box>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className={styles.headerRow}>
                  <TableCell>{t('Title')}</TableCell>
                  <TableCell align="center">{t('Description')}</TableCell>
                  <TableCell align="center">{t('Type')}</TableCell>
                  <TableCell align="center">{t('Data')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {annoucements && annoucements.length > 0 && annoucements.map((row) => (
                  <TableRow key={row.title} className={styles.tableRow}>
                    <TableCell className={styles.paddingL}>
                      {row.title}
                    </TableCell>
                    <TableCell align="center">
                      {row.description}
                    </TableCell>
                    <TableCell align="center">
                      {row.data}
                    </TableCell>
                    <TableCell align="center">
                      {row.type}
                    </TableCell>

                    <Box className={styles.deleteDots}>
                      <MoreHoriz
                        color="#7b99ae"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={(e) => this.handleClickListItem(e, row)}
                      />
                    </Box>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <MaterialPagination
              totalData={totalData}
              currentPage={currentPage}
              onChangePage={this.handlePageChange}
            />
            {this.renderMoreOptionsMenu()}
          </Box>
        </Box>
      </LoaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    annoucements : selectAnnoucements(state),
    isFetchingAnnoucements : selectIsFetchingAnnoucement(state),
    isCreatingAnnoucement : selectIsCreatingAnnoucement(state),
    currentPage : selectCurrentPage(state),
    totalData : selectTotal(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAnnoucements: page => dispatch(getAnnoucementsAction(page)),
    deleteAnnoucement: id => dispatch(deleteAnnoucementAction(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(withTranslation('translations')(Annoucements));

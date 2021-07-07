import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import styles from '../../Content.module.scss';
import LoaderWrapper from '../../../../hoc/loaderWrapper/LoaderWrapper';
import { Box, Button, Grid, Menu, MenuItem, Select } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NewPostDialog from './dialog/newTemplate/NewTemplateDialogContainer';
import postImage from '../../../../assets/images/icons/post.svg';
import eventImage from '../../../../assets/images/icons/event.svg';
import { connect } from 'react-redux';
import {
  getTemplatesAction,
  deleteTemplateAction,
  getTemplatesCategoriesAction,
} from '../../../../reducers/template/template.actions';
import {
  selectTemplates,
  selectIsFetchingTemplates,
  selectIsCreatingTemplate,
  selectIsChangingTemplateStatus,
  selectIsDeletingTemplate,
  selectTotal,
  selectCurrentPage,
  selectTemplateCategories,
} from '../../../../reducers/template/template.selectors';
import moment from 'moment';
import TemplateStatusDialog from './dialog/templateStatus/TemplateStatusDialog';
import { MoreHoriz } from '@material-ui/icons';
import ConfirmationModal from '../../../../components/confirmationModal/ConfirmationModal';
import trashIcon from '../../../../assets/images/icons/trash-icon.svg';
import MaterialPagination from '../../../../components/materialPagination/MaterialPagination';

class Templates extends Component {
  state = {
    isOpenNewTemplateDialog: false,
    isOpenStatusDialog: false,
    isOpenDeleteModal: false,
    currentTemplate: {},
    anchorEl: null,
    deleteItemId: null,
    category: 0,
    sortField: 'id',
    sortDirection: false,
    type: ['post', 'event'],
  };

  onCloseNewTemplateDialog = template => {
    const currentTemplate = template && template.id ? template : {};
    this.setState(prevState => ({
      isOpenNewTemplateDialog: !prevState.isOpenNewTemplateDialog,
      currentTemplate,
    }));
  };

  onCloseTemplateStatusDialog = template => {
    const currentTemplate = template && template.id ? template : {};
    this.setState(prevState => ({
      isOpenStatusDialog: !prevState.isOpenStatusDialog,
      currentTemplate,
    }));
  };

  handleToggleDeleteModal = () => {
    this.setState(prevState => ({
      isOpenDeleteModal: !prevState.isOpenDeleteModal,
      anchorEl: null,
    }));
  };

  componentDidMount() {
    const { category, sortField, sortDirection, type } = this.state;
    const { getTemplatesAction, getTemplatesCategoriesAction } = this.props;
    getTemplatesAction(1, category, sortField, sortDirection, type);
    getTemplatesCategoriesAction();
  }

  handleClickListItem = (event, row) => {
    this.setState({
      anchorEl: event.currentTarget,
      deleteItemId: row.id,
      row,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      deleteItemId: null,
      row: null,
    });
  };

  deleteTemplate = () => {
    this.props.deleteTemplateAction(this.state.deleteItemId);
    this.setState({
      isOpenDeleteModal: false,
    });
  };

  renderMoreOptionsMenu = () => {
    const { t } = this.props;
    const { anchorEl, deleteItemId, row } = this.state;
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
        <MenuItem onClick={() => this.onCloseNewTemplateDialog(row)}>{t('Edit')}</MenuItem>
        <MenuItem onClick={() => this.handleToggleDeleteModal(deleteItemId)}>{t('Delete')}</MenuItem>
      </Menu>
    );
  };

  handlePageChange = (event, page) => {
    const { getTemplatesAction } = this.props;
    const { category, sortField, sortDirection, type } = this.state;
    getTemplatesAction(page + 1, category, sortField, sortDirection, type);
  };

  handleChangeCategory = async e => {
    await this.setState({
      category: e.target.value,
    });
    this.getNewData();
  };

  handleChangeSortTarget = async field => {
    await this.setState(prevState => ({
      sortField: field,
      sortDirection: !prevState.sortDirection,
    }));
    const { category, sortField, sortDirection, type } = this.state;
    this.props.getTemplatesAction(1, category, sortField, sortDirection, type);
  };

  getNewData = () => {
    const { category, sortField, sortDirection, type } = this.state;
    this.props.getTemplatesAction(1, category, sortField, sortDirection, type);
  };

  // handleContentTypeChange = event => {
  //   const { category, sortField, sortDirection, type } = this.state;
  //   const { getTemplatesAction } = this.props;
  //
  //   getTemplatesAction(1, category, sortField, sortDirection, event.target.value.toLowerCase());
  //
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    const {
      t,
      templates,
      isFetchingTemplates,
      isCreatingTemplate,
      isChangingTemplateStatus,
      isDeletingTemplate,
      totalData,
      currentPage,
      categories,
    } = this.props;

    const {
      isOpenNewTemplateDialog,
      isOpenStatusDialog,
      isOpenDeleteModal,
      currentTemplate,
      category,
      type,
    } = this.state;

    const { onCloseNewTemplateDialog, onCloseTemplateStatusDialog } = this;

    const isLoading = isFetchingTemplates || isCreatingTemplate || isChangingTemplateStatus || isDeletingTemplate;

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
        {isOpenStatusDialog && (
          <TemplateStatusDialog
            isOpen={isOpenStatusDialog}
            onClose={onCloseTemplateStatusDialog}
            currentTemplate={currentTemplate}
          />
        )}
        {isOpenDeleteModal && (
          <ConfirmationModal
            isOpen={true}
            onClose={this.handleToggleDeleteModal}
            onConfirm={this.deleteTemplate}
            closeTitle={t('No')}
            confirmTitle={t('Yes')}
            contentText={t('Are you sure you want to delete this template?')}
            image={trashIcon}
          />
        )}
        <Box>
          <Grid container className={styles.tabContentHeader} alignItems="center">
            <Grid xs={3}>
              <h2>{t('Content creation')}</h2>
            </Grid>
            <Grid container xs={9} className={styles.newTemplateBox} wrap="nowrap">
              {/*<Grid item xs={4} style={{ marginRight: '16px' }}>*/}
              {/*  <Select*/}
              {/*    fullWidth*/}
              {/*    value={type}*/}
              {/*    onChange={this.handleContentTypeChange}*/}
              {/*    name="type"*/}
              {/*    // error={touched.type && errors.type}*/}
              {/*    variant="outlined"*/}
              {/*    className={styles.input}*/}
              {/*    floatingLabelStyle={{*/}
              {/*      top: '-6px',*/}
              {/*    }}*/}
              {/*    style={{*/}
              {/*      height: 40,*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <MenuItem value={t('Post')}>{t('Post')}</MenuItem>*/}
              {/*    <MenuItem value={t('Event')}>{t('Event')}</MenuItem>*/}
              {/*    <MenuItem value={t('Announcement')}>{t('Announcement')}</MenuItem>*/}
              {/*  </Select>*/}
              {/*</Grid>*/}

              <Grid item xs={5}>
                <Select
                  fullWidth
                  value={category}
                  onChange={this.handleChangeCategory}
                  name="category"
                  // error={touched.category && errors.category}
                  // helperText={touched.category && errors.category}
                  variant="outlined"
                  className={styles.input}
                  floatingLabelStyle={{
                    top: '-6px',
                  }}
                  style={{
                    height: 40,
                  }}
                >
                  <MenuItem value={0}>{t('Category')}</MenuItem>
                  {categories &&
                    Boolean(categories.length) &&
                    categories.map(cat => {
                      return <MenuItem value={cat.id}>{cat.name}</MenuItem>;
                    })}
                </Select>
              </Grid>

              <Grid item>
                <Button onClick={onCloseNewTemplateDialog}>{t('NEW TEMPLATE')}</Button>
              </Grid>
            </Grid>
          </Grid>
          <Box>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className={styles.headerRow}>
                  <TableCell className={styles.hearderCell} onClick={() => this.handleChangeSortTarget('title')}>
                    {t('Title')}
                  </TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('published_at')}
                    align="center"
                  >
                    {t('State')}
                  </TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('type')}
                    align="center"
                  >
                    {t('Type')}
                  </TableCell>
                  <TableCell align="center">{t('Target Audience')}</TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('category')}
                    align="center"
                  >
                    {t('Category')}
                  </TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('usage_count')}
                    align="center"
                  >
                    {t('Used')}
                  </TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('locale')}
                    align="center"
                  >
                    {t('Language')}
                  </TableCell>
                  <TableCell
                    className={styles.hearderCell}
                    onClick={() => this.handleChangeSortTarget('published_at')}
                    align="center"
                  >
                    {t('Public Since')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {templates &&
                  templates.length > 0 &&
                  templates.map(row => (
                    <TableRow key={row.title} className={styles.tableRow}>
                      <TableCell className={styles.paddingL}>{row.title}</TableCell>
                      <TableCell align="center" onClick={() => onCloseTemplateStatusDialog(row)}>
                        {row.published_at ? (
                          <span className={styles.stateBadgeLive}>{t('Live')}</span>
                        ) : (
                          <span className={styles.stateBadgeDraft}>{t('Draft')}</span>
                        )}
                      </TableCell>
                      <TableCell align="center" className={styles.cellType}>
                        <img
                          src={row.type === 'post' || row.type === 'Post' ? postImage : eventImage}
                          className={styles.cellImage}
                        />
                        {row.type}
                      </TableCell>
                      <TableCell align="center">ALL</TableCell>
                      <TableCell align="center">{row.category && row.category.name}</TableCell>
                      <TableCell align="center">{row.usage_count}</TableCell>
                      <TableCell align="center">{row.locale}</TableCell>
                      <TableCell align="center" className={styles.paddingR}>
                        {row.published_at ? moment(row.published_at).format('MM/DD/Y') : '-'}
                      </TableCell>
                      <Box className={styles.deleteDots}>
                        <MoreHoriz
                          color="#7b99ae"
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={e => this.handleClickListItem(e, row)}
                        />
                      </Box>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <MaterialPagination totalData={totalData} currentPage={currentPage} onChangePage={this.handlePageChange} />
            {this.renderMoreOptionsMenu()}
          </Box>
        </Box>
      </LoaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    templates: selectTemplates(state),
    isFetchingTemplates: selectIsFetchingTemplates(state),
    isCreatingTemplate: selectIsCreatingTemplate(state),
    isChangingTemplateStatus: selectIsChangingTemplateStatus(state),
    isDeletingTemplate: selectIsDeletingTemplate(state),
    totalData: selectTotal(state),
    currentPage: selectCurrentPage(state),
    categories: selectTemplateCategories(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTemplatesAction: (page, category, sortField, sortDirection, type) =>
      dispatch(getTemplatesAction(page, category, sortField, sortDirection, type)),
    deleteTemplateAction: id => dispatch(deleteTemplateAction(id)),
    getTemplatesCategoriesAction: () => dispatch(getTemplatesCategoriesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('translations')(Templates));

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
import NewPostDialog from './dialog/newArticle/NewArticleDialogContainer';
import { connect } from 'react-redux';
import { MoreHoriz } from '@material-ui/icons';
import ConfirmationModal from '../../../../components/confirmationModal/ConfirmationModal';
import trashIcon from '../../../../assets/images/icons/trash-icon.svg';
import { getArticlesAction , deleteArticleAction } from '../../../../reducers/article/article.actions';
import { selectArticles , selectIsFetchingArticles , selectIsCreatingArticle , selectCurrentPage , selectTotal } from '../../../../reducers/article/article.selectors';
import MaterialPagination from '../../../../components/materialPagination/MaterialPagination';

class Articles extends Component{

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
    this.props.getArticles();
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
    this.props.deleteArticle(this.state.deleteItemId);
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
    const { getArticles } = this.props;
    getArticles(page + 1);
  };

  render() {


    const {
      t,
      articles,
      isFetchingArticles,
      isCreatingArticle,
      totalData,
      currentPage
    } = this.props;

    const {
      isOpenNewTemplateDialog ,
      isOpenStatusDialog,
      isOpenDeleteModal,
      currentTemplate,
    } = this.state;

    const {
      onCloseNewTemplateDialog ,
      onCloseTemplateStatusDialog
    } = this;

    const isLoading = isFetchingArticles || isCreatingArticle;


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
            contentText={t('Are you sure you want to delete this Article?')}
            image={trashIcon}
          />
        )}
        <Box>
          <Grid container className={styles.tabContentHeader} alignItems="center">
            <Grid xs={6}>
              <h2>{t('Content creation')}</h2>
            </Grid>
            <Grid xs={6} className={styles.newTemplateBox}>
              <Button onClick={onCloseNewTemplateDialog}>{t('NEW ARTICLE')}</Button>
            </Grid>
          </Grid>
          <Box>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className={styles.headerRow}>
                  <TableCell>{t('Title')}</TableCell>
                  <TableCell align="center">{t('Description')}</TableCell>
                  <TableCell align="center">{t('Url')}</TableCell>
                  <TableCell align="center">{t('Category')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles && articles.length > 0 && articles.map((row) => (
                  <TableRow key={row.title} className={styles.tableRow}>
                    <TableCell className={styles.paddingL}>
                      {row.title}
                    </TableCell>
                    <TableCell align="center">
                      {row.description}
                    </TableCell>
                    <TableCell align="center">
                      {row.url}
                    </TableCell>
                    <TableCell align="center">
                      {row.category && row.category.name}
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
    articles : selectArticles(state),
    isFetchingArticles : selectIsFetchingArticles(state),
    isCreatingArticle : selectIsCreatingArticle(state),
    currentPage : selectCurrentPage(state),
    totalData : selectTotal(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles : page => dispatch(getArticlesAction(page)),
    deleteArticle : id => dispatch(deleteArticleAction(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(withTranslation('translations')(Articles));

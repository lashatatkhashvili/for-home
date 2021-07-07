import React, { useEffect, useState } from 'react';
import useStyles from './EmailTemplates.style';
import styles from '../../Content.module.scss';
import { Box, Button, Grid, Menu, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import moment from 'moment';
import { MoreHoriz } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGlobalEmailTemplates,
  selectIsFetchingGlobalEmailTemplates,
  selectIsRemovingEmailTemplate,
} from '../../../../reducers/emailTemplates/emailTemplates.selectors';
import {
  fetchGlobalEmailTemplates,
  removeEmailTemplate,
} from '../../../../reducers/emailTemplates/emailTemplates.actions';
import EmailBuilder from './emailBuilder/EmailBuilder';
import ConfirmationModal from '../../../../components/confirmationModal/ConfirmationModal';
import trashIcon from '../../../../assets/images/icons/trash-icon.svg';
import LoaderWrapper from '../../../../hoc/loaderWrapper/LoaderWrapper';

const EmailTemplates = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [anchorElement, setAnchorElement] = useState(null);
  const [isEmailBuilderOpen, setEmailBuilderOpen] = useState(false);
  const [editingTemplateId, setEditingTemplateId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const globalTemplates = useSelector(selectGlobalEmailTemplates);
  const isRemovingTemplate = useSelector(selectIsRemovingEmailTemplate);
  const isFetchingGlobalTemplates = useSelector(selectIsFetchingGlobalEmailTemplates);

  const tableHeader = [t('Title'), t('Subject'), t('Last modified')];

  useEffect(() => {
    if (!Boolean(globalTemplates.length)) {
      dispatch(fetchGlobalEmailTemplates());
    }
  }, []);

  const handleOpenMenu = (event, templateId) => {
    setAnchorElement(event.currentTarget);
    setEditingTemplateId(templateId);
  };

  const handleEditTemplate = () => {
    setEmailBuilderOpen(true);
    setAnchorElement(null);
  };

  const handleCloseModal = () => {
    setEditingTemplateId(null);
    setEmailBuilderOpen(false);
  };

  const handleOpenConfirmModal = () => {
    setIsDeleteModalOpen(true);
    setAnchorElement(null);
  };

  const handleRemoveTemplate = () => {
    dispatch(removeEmailTemplate(editingTemplateId));
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Grid container className={styles.tabContentHeader} alignItems="center">
        <Grid xs={4}>
          <h2>{t('Content creation')}</h2>
        </Grid>
        <Grid container xs={8} className={styles.newTemplateBox}>
          <Grid item>
            <Button onClick={() => setEmailBuilderOpen(true)}>{t('New email template')}</Button>
          </Grid>
        </Grid>
      </Grid>

      <LoaderWrapper isLoading={isFetchingGlobalTemplates} style={{ height: '410px' }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={styles.headerRow}>
              {tableHeader.map((tableHead, index) => (
                <TableCell key={index} className={styles.hearderCell}>
                  {tableHead}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {globalTemplates &&
              globalTemplates.length > 0 &&
              globalTemplates.map(row => (
                <TableRow key={row.id} className={styles.tableRow}>
                  <TableCell className={styles.paddingL}>{row.name}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.lastModified ? moment(row.lastModified).format('L') : ''}</TableCell>

                  <Box className={styles.deleteDots}>
                    <MoreHoriz
                      color="#7b99ae"
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={event => handleOpenMenu(event, row.id)}
                    />
                  </Box>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </LoaderWrapper>

      {isEmailBuilderOpen && <EmailBuilder isOpen={true} templateId={editingTemplateId} onClose={handleCloseModal} />}

      {isDeleteModalOpen && (
        <ConfirmationModal
          isOpen={true}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleRemoveTemplate}
          closeTitle={t('No')}
          confirmTitle={t('Yes')}
          contentText={t('Are you sure you want to delete this template?')}
          image={trashIcon}
          isLoading={isRemovingTemplate}
        />
      )}

      <Menu
        id="email-template-menu"
        anchorEl={anchorElement}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElement)}
        onClose={() => setAnchorElement(false)}
        keepMounted
      >
        <MenuItem onClick={handleEditTemplate}>{t('Edit')}</MenuItem>
        <MenuItem onClick={handleOpenConfirmModal}>{t('Delete')}</MenuItem>
      </Menu>
    </>
  );
};

export default EmailTemplates;

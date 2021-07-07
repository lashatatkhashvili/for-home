import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withTranslation } from 'react-i18next';

const MaterialMoreOptionsMenu = props => {
  const { t, moreOptionsMenuAnchorNode, onClose, onEdit, onDelete } = props;

  return (
    <Menu
      anchorEl={moreOptionsMenuAnchorNode}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={!!moreOptionsMenuAnchorNode}
      onClose={onClose}
      keepMounted
    >
      <MenuItem onClick={onEdit}>{t('Edit')}</MenuItem>
      <MenuItem onClick={onDelete}>{t('Delete')}</MenuItem>
    </Menu>
  );
};

export default withTranslation('translations')(MaterialMoreOptionsMenu);

import React , { Component } from 'react';
import { Box, Dialog } from '@material-ui/core';
import styles from './TemplateStatusDialog.module.scss';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { StopIcon , LiveIcon } from './Icons';
import { toggleTemplateStatusAction } from '../../../../../../reducers/template/template.actions';

class TemplateStatusDialog extends Component{

  submitStatusToggle = id => {
    this.props.toggleTemplateStatusAction(id);
    this.props.onClose();
  }

  render() {

    const {
      t,
      isOpen,
      onClose,
      currentTemplate
    } = this.props;

    return(
      <Dialog open={isOpen} maxWidth={1056} onClose={onClose}>
        <Box className={styles.dialogBoxContainer}>
          {currentTemplate && (
            <>
              <Box className={styles.statusBadge}>
                  {currentTemplate.published_at ? <StopIcon text={t('STOP')}/> : <LiveIcon text={t('LIVE')}/>}
              </Box>
              <h3 className={styles.statusText}>
                {currentTemplate.published_at ?
                 t('You are about to pause this template Do you want to proceed?') :
                 t('You are about to activate this template Do you want to proceed?')
                }
              </h3>
              <Box className={styles.statusActions}>
                <button onClick={onClose}>{t('NO')}</button>
                <button
                  className={styles.statusYesBtn}
                  onClick={() => this.submitStatusToggle(currentTemplate.id)}
                >
                  {t('YES')}
                </button>
              </Box>
            </>
          )}

        </Box>
      </Dialog>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    toggleTemplateStatusAction : id => dispatch(toggleTemplateStatusAction(id))
  }
};

export default connect(
  null,
  mapDispatchToProps
)
(withTranslation('translations')(TemplateStatusDialog));

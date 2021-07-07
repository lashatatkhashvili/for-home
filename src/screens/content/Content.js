import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import MainLayoutContainer from '../../components/mainLayout/MainLayoutContainer';
import styles from './Content.module.scss';
import LoaderWrapper from '../../hoc/loaderWrapper/LoaderWrapper';
import { Box, Grid } from '@material-ui/core';
import * as tab from '../../constants/content';
import Templates from './tabs/templates/Templates';
import Articles from './tabs/articles/Articles';
import Annoucements from './tabs/annoucements/Annoucements';
import Surveys from './tabs/surveys/Surveys';
import SpecialDays from './tabs/specialDays/SpecialDays';
import EmailTemplates from './tabs/emailTemplates/EmailTemplates';
import PostAnnouncements from './tabs/postAnnouncements/PostAnnouncements';
import Upsales from './upsales/Upsales';

class Content extends Component {
  state = {
    activeTab: tab.TEMPLATES,
  };

  handleChangeTab = e => {
    this.setState({
      activeTab: e,
    });
  };

  render() {
    const { t, isLoadingUpdateUserInfo } = this.props;

    const { activeTab } = this.state;

    const { handleChangeTab } = this;

    const isLoading = isLoadingUpdateUserInfo;
    return (
      <MainLayoutContainer>
        <LoaderWrapper isLoading={isLoading}>
          <div className={styles.contentCreationContainer}>
            <Grid container wrap="nowrap">
              <Grid className={styles.contentCreationSidebar}>
                <Box className={styles.sidebarItem}>
                  <ul>
                    <li
                      onClick={() => handleChangeTab(tab.TEMPLATES)}
                      className={activeTab === tab.TEMPLATES ? styles.active : ''}
                    >
                      Templates
                    </li>
                    <li
                      onClick={() => handleChangeTab(tab.ARTICLES)}
                      className={activeTab === tab.ARTICLES ? styles.active : ''}
                    >
                      Articles
                    </li>
                    <li
                      onClick={() => handleChangeTab(tab.ANNOUCEMENTS)}
                      className={activeTab === tab.ANNOUCEMENTS ? styles.active : ''}
                    >
                      Annoucements
                    </li>
                    <li
                      onClick={() => handleChangeTab(tab.SURVEYS)}
                      className={activeTab === tab.SURVEYS ? styles.active : ''}
                    >
                      Surveys
                    </li>
                    <li
                      onClick={() => handleChangeTab(tab.UPSALES)}
                      className={activeTab === tab.UPSALES ? styles.active : ''}
                    >
                      Upsales
                    </li>

                    <li
                      onClick={() => handleChangeTab(tab.EMAIL_TEMPLATES)}
                      className={activeTab === tab.EMAIL_TEMPLATES ? styles.active : ''}
                    >
                      Email Templates
                    </li>

                    <li
                      onClick={() => handleChangeTab(tab.POST_ANNOUNCEMENTS)}
                      className={activeTab === tab.POST_ANNOUNCEMENTS ? styles.active : ''}
                    >
                      Post Announcements
                    </li>

                    <li
                      onClick={() => handleChangeTab(tab.SPECIAL_DAYS)}
                      className={activeTab === tab.SPECIAL_DAYS ? styles.active : ''}
                    >
                      Special Days
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid className={styles.contentCreationContent}>
                {activeTab === tab.TEMPLATES && <Templates />}
                {activeTab === tab.ARTICLES && <Articles />}
                {activeTab === tab.ANNOUCEMENTS && <Annoucements />}
                {activeTab === tab.SURVEYS && <Surveys />}

                {activeTab === tab.UPSALES && <Upsales />}

                {activeTab === tab.EMAIL_TEMPLATES && <EmailTemplates />}

                {activeTab === tab.POST_ANNOUNCEMENTS && <PostAnnouncements />}

                {activeTab === tab.SPECIAL_DAYS && <SpecialDays />}
              </Grid>
            </Grid>
          </div>
        </LoaderWrapper>
      </MainLayoutContainer>
    );
  }
}

export default withTranslation('translations')(Content);

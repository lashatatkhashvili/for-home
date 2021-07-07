import React from 'react';
import styles from './ElapsedTime.module.scss';
import { withTranslation } from 'react-i18next';
import moment from 'moment';
import reactStringReplace from 'react-string-replace';
import PropTypes from 'prop-types';
import { prependZero } from '../../../utils/helpers';

const ElapsedTime = props => {
  const { t, reportDate, resolveDate } = props;

  const reportDateMoment = moment(reportDate);
  const resolveDateMoment = moment(resolveDate);
  const timeElapsed = moment.duration(moment().diff(reportDateMoment));

  if (resolveDate) {
    return (
      <div className={styles.resolvedWrapper}>
        <div className={styles.label}>{t('Closed on')}:</div>
        <div className={styles.date}>{resolveDateMoment.format('DD MMM YYYY')}</div>
      </div>
    );
  }

  if (timeElapsed.asDays() < 1) {
    return (
      <div className={styles.timeWrapper}>
        <div className={styles.time}>
          {prependZero(timeElapsed.hours().toFixed(0))} : {prependZero(timeElapsed.minutes().toFixed(0))}
        </div>
        <div className={styles.label}>
          <span>{t('Hours').toUpperCase()}</span>
          <span>{t('Minutes').toUpperCase()}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.daysAgoWrapper}>
        <div className={styles.daysAgo}>
          {timeElapsed.asDays() < 2
            ? reactStringReplace(t('Older than {DAY}'), '{DAY}', () => {
                return (
                  <div key={timeElapsed.asDays()} className={styles.dayCount}>
                    {timeElapsed.asDays().toFixed(0)} {t('day')}
                  </div>
                );
              })
            : reactStringReplace(t('Older than {DAYS} days'), '{DAYS}', () => {
                return (
                  <div key={timeElapsed.asDays()} className={styles.dayCount}>
                    {timeElapsed.asDays().toFixed(0)}
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
};

ElapsedTime.propTypes = {
  reportDate: PropTypes.string.isRequired,
  resolveDate: PropTypes.string,
};

export default withTranslation('translations')(ElapsedTime);

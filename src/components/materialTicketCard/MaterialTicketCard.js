import React, { Component } from 'react';
// import styles from './MaterialTicketCard.module.scss';
// import Card from '../card/Card';
// import Image from '../image/Image';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { TICKET_OPEN, TICKET_RESOLVED } from '../../constants/ticketStatuses';
// import ElapsedTime from './elapsedTime/ElapsedTime';
// import CardTitle from '../card/cardTitle/CardTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import classes from './MaterialTicketCard.style';
import { withStyles } from '@material-ui/core/styles';
import { FEWDAYSLATER, MOREDAYSLATER } from '../../constants/misc';
import MaterialTypography from '../materialTypography/MaterialTypography';
import * as Icons from '@material-ui/icons';

class MaterialTicketCard extends Component {
  constructor(props) {
    super(props);

    this.updateInterval = null;
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => {
      this.forceUpdate();
    }, 1 * 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  getOrnamentStyles = () => {
    const { ticket, resolvedId, classes } = this.props;
    const timeElapsed = moment().diff(moment(ticket.created), 'days');

    let className = null;

    if (ticket.statusId === resolvedId) return className;

    if (timeElapsed > FEWDAYSLATER) className = classes.warning;
    if (timeElapsed > MOREDAYSLATER) className = classes.danger;

    return className;
  };

  render() {
    const {
      t,
      ticket: {
        // id,
        tenant,
        category,
        issue,
        created,
        // resolved,
        reopened,
        // statusId,
        files,
      },
      classes,
      onEdit,
    } = this.props;

    const createdDate = moment(created);
    const reopenedDate = moment(reopened);
    const ornamentStyle = this.getOrnamentStyles();

    return (
      <Box mr={4} mb={4} onClick={onEdit}>
        <Card classes={{ root: classes.cardWrapper }}>
          <Box p={2}>
            <Grid container justify="space-between" alignItems="center">
              <MaterialTypography size="14px" weight="500">
                {tenant.name}
              </MaterialTypography>
              <MaterialTypography size="14px" weight="300">
                {category && category.name}
              </MaterialTypography>
            </Grid>
          </Box>
          <Divider />

          <CardContent classes={{ root: `${classes.cardContent} ${ornamentStyle}` }}>
            <Box p={2}>
              <Grid container direction="column" justify="space-between">
                <Grid item>
                  <MaterialTypography size="14px" weight="500">
                    {issue}
                  </MaterialTypography>
                </Grid>

                <Box mt={2}>
                  <Grid item container justify="space-between" alignItems="center">
                    <Grid item>
                      <MaterialTypography size="14px" weight="300">
                        {t('Since')}: {createdDate.format('dddd HH:mm')}
                      </MaterialTypography>
                      {reopened && (
                        <MaterialTypography size="14px" weight="300">
                          {t('Reopened')}: {reopenedDate.format('dddd HH:mm')}
                        </MaterialTypography>
                      )}
                    </Grid>

                    <Grid item>
                      {files && files.length > 0 && (
                        <Grid
                          container
                          // justify="space-between"
                          alignItems="center"
                          wrap="nowrap"
                        >
                          <Grid item>
                            <Icons.InsertDriveFileOutlined style={{ opacity: 0.5, marginRight: '10px' }} />
                          </Grid>
                          <Grid item>
                            <MaterialTypography size="14px" weight={500}>
                              {t('{FILE_LENGTH} Files').replace('{FILE_LENGTH}', files.length)}
                            </MaterialTypography>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

MaterialTicketCard.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default withTranslation('translations')(withStyles(classes)(MaterialTicketCard));

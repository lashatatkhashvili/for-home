import React, { Component } from 'react';
import classes from './CarpoolItem.style';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import * as Icons from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import MaterialTypography from '../materialTypography/MaterialTypography';
import Avatar from '@material-ui/core/Avatar';
import standingUpMan from '../../assets/images/icons/standingUpMan.svg';
import standingUpManBrown from '../../assets/images/icons/standingUpManBrown.svg';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { ADMIN, HR, SUPER_ADMIN } from '../../constants/roles';
import IconButton from '@material-ui/core/IconButton';
import AccessControl from '../../hoc/accessControl/AccessControl';
import MaterialMoreOptionsMenu from '../materialMoreOptionsMenu/MaterialMoreOptionsMenu';
import moment from 'moment';

class CarpoolItem extends Component {
  state = {
    isExpanded: false,
    moreOptionsMenuAnchorNode: null,
  };

  handleMoreOptionsMenuOpen = event => {
    const node = event.target;
    this.setState({
      moreOptionsMenuAnchorNode: node,
    });
  };

  handleMoreOptionsMenuClose = () => {
    this.setState({
      moreOptionsMenuAnchorNode: null,
    });
  };

  handleToggleExpand = () => {
    this.setState(currentState => {
      return {
        isExpanded: !currentState.isExpanded,
      };
    });
  };

  render() {
    const {
      t,
      classes,
      carpool,
      // user,
      // rideId,
      onEdit,
      onDelete,
    } = this.props;
    const { isExpanded, moreOptionsMenuAnchorNode } = this.state;

    return (
      <Box className={classes.carpoolItemWrapper}>
        <Grid container wrap="nowrap">
          <Grid item className={classes.carpoolItemLeftColumn}>
            <Box pl={3} pt={2}>
              <Grid container alignItems="center">
                <Grid item>
                  <Box mr={2}>
                    <Avatar alt="avatar" src={carpool.driver.avatar} />
                  </Box>
                </Grid>

                <Grid item>
                  <MaterialTypography size="14px" weight="500" className={classes.driverName}>
                    {carpool.driver.name}
                  </MaterialTypography>
                  <MaterialTypography size="14px" weight="300" variant="subtitle2" className={classes.driverPlate}>
                    {t('Plate number')}: {carpool.licensePlate}
                  </MaterialTypography>
                </Grid>
              </Grid>
            </Box>

            <Box px={2} pt={2}>
              <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                <Grid container alignItems="center">
                  <img src={standingUpManBrown} alt="standing-up-man" className={classes.standingUpManIcon} />
                  <MaterialTypography size="14px" weight="500">
                    {t('Free Seats')} - {carpool.numberOfSeats - carpool.occupiedSeats}
                  </MaterialTypography>
                </Grid>

                <Grid container alignItems="center">
                  <img src={standingUpMan} alt="standing-up-man" className={classes.standingUpManIconLight} />
                  <MaterialTypography size="14px" weight="500">
                    {t('Booked Seats')} - {carpool.occupiedSeats}
                  </MaterialTypography>
                </Grid>
              </Grid>
            </Box>

            <Collapse in={isExpanded}>
              <Box px={3} mt={2} pb={2}>
                <MaterialTypography size="14px" weight="500">
                  {t('Driver Comment')}
                </MaterialTypography>
                <MaterialTypography size="12px" weight="300">
                  {carpool.comment}
                </MaterialTypography>
              </Box>
            </Collapse>
          </Grid>

          <Grid item className={classes.carpoolItemRightColumn}>
            <Box p={2} className={classes.carpoolItemDestination}>
              <Grid container alignItems="center" justify="space-between">
                <Grid
                  item
                  container
                  alignItems="center"
                  // justify="space-between"
                  wrap="nowrap"
                  className={classes.carpoolItemDestinationText}
                >
                  <MaterialTypography className={classes.destinationText}>
                    <span className={classes.destinationTextBold}>{t('From')}:</span>
                    <span>{carpool.from}</span>
                  </MaterialTypography>

                  <Icons.ArrowRightAlt style={{ fontSize: '32px' }} />

                  <MaterialTypography className={classes.destinationText}>
                    <span className={classes.destinationTextBold}>{t('To')}:</span>
                    <span>{carpool.to}</span>
                  </MaterialTypography>
                </Grid>

                <Grid item style={{ height: '32px', width: '32px' }}>
                  <AccessControl allowedRoles={[SUPER_ADMIN, ADMIN, HR]}>
                    <IconButton onClick={this.handleMoreOptionsMenuOpen} className={classes.moreOptionsIconButton}>
                      <Icons.MoreVert />
                    </IconButton>
                  </AccessControl>
                </Grid>
              </Grid>
            </Box>

            <Box px={3} pt={2}>
              <Grid container alignItems="center">
                <Icons.Schedule color="primary" style={{ marginRight: '5px' }} />
                <MaterialTypography size="14px" weight="300">
                  {/*{moment(carpool.date).format('llll')}*/}
                  {moment(carpool.date).format('ddd [-] MMM D[;] hh:mm A')}
                  {/*{carpool.date}*/}
                </MaterialTypography>
              </Grid>

              <Grid container justify="flex-end" onClick={this.handleToggleExpand} className={classes.collapseText}>
                <Grid item>
                  <MaterialTypography size="14px" weight="300">
                    {!isExpanded ? t('Expand') : t('Collapse')}
                  </MaterialTypography>
                </Grid>

                <Grid item>{isExpanded ? <Icons.ExpandLess /> : <Icons.ExpandMore />}</Grid>
              </Grid>
            </Box>

            <Collapse in={isExpanded}>
              <Box px={3} pb={2}>
                <MaterialTypography size="14px" weight={500}>
                  {t('Stations')}
                </MaterialTypography>
                <MaterialTypography size="12px" weight={300}>
                  {carpool.stations.join('; ')}
                </MaterialTypography>
              </Box>
            </Collapse>
          </Grid>
        </Grid>

        <MaterialMoreOptionsMenu
          moreOptionsMenuAnchorNode={moreOptionsMenuAnchorNode}
          onClose={this.handleMoreOptionsMenuClose}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Box>
    );
  }
}

export default withTranslation('translations')(withStyles(classes)(CarpoolItem));

export default theme => ({
  carpoolItemWrapper: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.16)',
    background: '#fff',
  },

  carpoolItemLeftColumn: {
    minWidth: '300px',
  },

  carpoolItemRightColumn: {
    borderLeft: '2px dashed #88816C',
    width: '100%',
    paddingBottom: '24px',
  },

  driverName: {
    lineHeight: '16px',
    fontWeight: 500,
    fontSize: '14px',
  },

  driverPlate: {
    lineHeight: '16px',
    fontWeight: 300,
    fontSize: '14px',
    opacity: 0.5,
  },

  standingUpManIcon: {
    width: '25px',
    height: '34px',
  },

  standingUpManIconLight: {
    width: '25px',
    height: '34px',
    opacity: 0.2,
  },

  carpoolItemDestination: {
    backgroundColor: '#354739',
    color: '#979797',
  },

  carpoolItemDestinationText: {
    // minWidth: '410px',
    // background: 'red',
    flexBasis: '0',
  },

  destinationText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 200,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    // width: '100%',
  },
  destinationTextBold: {
    fontWeight: 400,
    marginRight: '5px',
  },

  collapseText: {
    cursor: 'pointer',
    height: '21px',
  },
  moreOptionsIconButton: {
    // background: 'red',
    marginTop: '-6px',
    marginBottom: '-6px',
    marginRight: '-8px',
    color: 'white',
  },
});

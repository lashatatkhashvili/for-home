export default theme => ({
  container: {
    maxWidth: '904px',
  },
  containerText: {
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHight: '1.33',
    letterSpacing: 'normal',
  },
  containerInput: {
    padding: '10px',
    width: '195px',
  },
  containerButton: {
    width: '163px',
    height: '40px',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    textOverflow: 'no',
    borderRadius: '8px',
    backgroundColor: '#5EBE84',
  },
  card: {
    boxShadow: 'none',
    border: '1px solid rgba(46,53,55,0.2)',
    '&:hover .survey-background-hov': {
      display: 'block',
    },
    '&:hover .survey-card-title': {
      color: '#ffffff',
    },
    '&:hover .survey-background-def': {
      display: 'none',
    },
    '&:hover': {
      boxShadow: '0 0 8px 2px rgba(0,0,0,0.08)',
    },
  },
  cardTitle: {
    textOverflow: 'elipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  headerBackgroundHovered: {
    display: 'none',
  },
  headerBackgroundDefault: {
    display: 'block',
    backgroundPosition: 'top right',
  },
  participantsBorder: {
    position: 'absolute',
    height: '72px',
    top: 'calc((100% - 72px)/2)',
    right: 0,
    width: '1px',
    background: 'rgba(136, 129, 108, 0.2)',
  },
  menu: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.08)',
  },
  statusWrapper: {
    width: '54px',
    height: '24px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
  },
  bodyCell: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    color: '#2e3537',
    border: 'none',
    padding: '0',

    '&:first-child': {
      paddingLeft: '24px',
    },
  },
  tableBody: {
    padding: '0 24px',
  },
  bodyRow: {
    transition: 'all 0.15s ease',
    '&:hover': {
      background: 'rgba(248, 208, 182, 0.4)',
      borderRadius: '8px',
    },
  },
  headCell: {
    padding: '24px 16px',
    borderBottom: '4px solid #aedec1',
  },
  tableCell: {
    height: '57px',
    padding: '16px',
    '&:last-child': {
      paddingLeft: '0',
    },
  },
});

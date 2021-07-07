export default theme => ({
  button: {
    width: '100%',
    display: 'flex',
    padding: '0',
    '&:hover': {
      background: 'none',
      opacity: '0.6',
    },
  },
  voteInfo: {
    position: 'relative',
    flex: 1,
    height: '34px',
    display: 'flex',
    padding: '0 16px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activePoll: {
    border: '1px solid rgba(230, 207, 192, 0.5)',
  },
  voteBackgroundWrapper: {
    background: 'transparent',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all 1s ease-out',
  },
  voteBackground: {
    backgroundColor: '#E6CFC0',
    height: '100%',
    animation: '$anim 2500ms',
  },
  '@keyframes anim': {
    '0%': {
      width: 0,
    },
    '100%': {
      width: '100%',
    },
  },
  text: {
    color: '#2E3537',
    fontSize: '16px',
    textTransform: 'none',
  },
  votes: {
    opacity: '0.5',
    fontSize: '14px',
  },
  statWrapper: {
    minWidth: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  radio: {
    padding: 0,
  },
  percentage: {
    color: '#2E3537',
    fontSize: '16px',
  },
});

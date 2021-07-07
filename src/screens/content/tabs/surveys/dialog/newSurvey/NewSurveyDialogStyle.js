export default theme => ({
  dialog : {
    width : '100%',
    maxWidth : '1056px!important'
  },
  questionBox: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    border: '1px solid rgba(103, 129, 137, 0.2)',
    borderRadius: '8px',
  },
  containerText: {
    minWidth: 170,
    fontSize: '24px',
    lineHight: '1.33',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
  },
  questionTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    '&:hover .survey-title-edit': {
      display: 'block',
    },
  },
  line: {
    height: '1px',
    opacity: '0.2',
    backgroundColor: '#2e3537',
    flex: 1,
    marginLeft: theme.spacing(4),
  },
  titleEditBtn: {
    display: 'none',
    marginLeft: '8px',
  },
  deleteBtn: {
    width: 145,
    height: 40,
    padding: 0,
    border: 'none',
    borderRadius: 8,
    color: '#D74D5F',
    marginLeft: '16px',
    marginRight: '-8px',
    backgroundColor: '#ffffff',
  },
  questionTitle: {
    marginRight: theme.spacing(1),
  },
  questionTitleText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '30px',
    height: 30,
    color: 'inherit',
  },
  smallQuestionTitleText: {
    color: 'inherit',
    fontSize: '14px',
    lineHeight: '1.43',
  },
  questionControls: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(2),
    paddingRight: theme.spacing(2.5),
    paddingLeft: theme.spacing(12),
    color: '#fff',
  },
  questionControlButton: {
    marginLeft: theme.spacing(1),
    padding: 8,
    color: '#678189',
    backgroundColor: 'rgba(103, 129, 137, 0.2)',
  },
  questionFixedAnswers: {
    overflowX: 'auto',
    '& > div': {
      border: '1px solid #979A9B',
    },
    '& > div:first-child': {
      borderRadius: '10px 0 0 10px',
    },
    '& > div:not(:last-child)': {
      borderRight: 'none',
    },
    '& > div:last-child': {
      borderRadius: '0 10px 10px 0',
    },
  },
  footerButton: {
    flex: 1,
    height: '72px',
    fontSize: '16px',
    color: '#678189',
    position: 'relative',
    fontWeight: 'normal',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(248, 208, 182, 0.4)',
    },
    '&::after': {
      content: '""',
      right: 0,
      width: 1,
      height: 48,
      position: 'absolute',
      top: 'calc((100% - 48px) / 2)',
      background: 'rgba(103, 129, 137, 0.2)',
    },
    '&:last-child::after': {
      display: 'none',
    },
  },
  settingsBtn: {
    width: 157,
    height: 40,
    borderRadius: 8,
    color: '#88816C',
    backgroundColor: '#ffffff',
    border: '1px solid #88816C',
  },
  draftBtn: {
    // paddingLeft: 0,
    // paddingRight: 0,
    background: 'none',
    margin: '0 24px',
    '&:hover': {
      background: 'none',
    },
    '& > span': {
      textDecoration: 'underline',
    },
  },
  publishBtn: {
    width: '117px',
    height: '40px',
    color: '#ffffff',
    borderRadius: '8px',
    backgroundColor: '#5EBE84',
  },
  titleInput: {
    fontSize: '20px',
    fontWeight: '500',
    lineHight: '1.4',
    color: '#2e3537',
  },
  optionBtn: {
    fontSize: '25px',
    margin: '0px 0px 0 -5px',
    paddingLeft: 0,
    borderRadius: '4px',
    textTransform: 'capitalize',
    color: '#F8D0B6',
    background: 'none',
    '&:hover': {
      background: 'none',
    },
  },
  fieldControlsWrapper: {
    position: 'absolute',
    // bottom: '60px',
    // right: '164px',
    left: 'calc(100% - 370px)',
    top: 'calc(100% - 83px)',
    alignItems: 'center',
    fontSize: '14px',
  },
  reactionsControlsBtn: {
    fontSize: '14px',
    borderRadius: '8px',
    fontWeight: 'normal',
    '&:hover': {
      background: 'none',
    },
  },
  reactionControlsText: {
    fontSize: '14px',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    marginLeft: '12px',
  },
  noItemWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'unset',
  },
  noItemHeading: {
    fontSize: 24,
    marginRight: 56,
  },
  noItemSubHeading: {
    marginRight: 56,
    fontSize: 16,
    width: 'unset',
    marginBottom: '14px',
  },
  noItemImageWrapper: {
    '& img': {
      width: 400,
    },
  },
});

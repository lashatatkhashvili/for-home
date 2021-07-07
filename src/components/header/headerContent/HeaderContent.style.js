import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBarWrapper: {
    background: '#fff',
    boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.08)',
  },

  logoWrapper: {
    width: '320px',
    paddingRight: theme.spacing(3),
    // background: 'red',
  },

  logoContent: {
    width: '160px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // background: 'rgba(234, 235, 235, 0.1)',
    // background: 'blue',
    background: 'rgba(228, 209, 190, 0.1)',
    borderRadius: '8px',
    padding: '10px 24px',
    // border-radius: 8px;
    // backgroundColor: '#e4d1be',
  },

  selectorArrowIcon: {
    marginLeft: '8px',
    color: '#88836B',
    fontSize: '28px',
  },

  logoImage: {
    maxWidth: '80px',
    maxHeight: '80px',
    objectFit: 'cover',
  },

  avatar: {
    marginLeft: theme.spacing(2),
  },

  accountUser: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#303537',
    marginRight: '14px',
  },

  divider: {
    height: '28px',
    backgroundColor: '#fff',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  globalMessageBox: {
   height : 40 ,
    position : 'relative',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  globalMessage : {
    color : '#2e3537',
    fontSize : '14px',
    fontWeight : 'normal'
  },
  closeButton : {
    position : 'absolute',
    width : '24px',
    height : '24px',
    top : '8px',
    right : '24px',
    cursor: 'pointer'
  }
}));

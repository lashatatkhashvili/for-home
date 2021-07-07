import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: '#303537',
        color: '#fff',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: 8,
      },
    },
    MuiPaper: {
      elevation5: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.08)',
      },
    },
    MuiTypography: {
      root: {
        color: '#2E3537',
      },
      colorTextPrimary: {
        color: '#2E3537',
      },
      colorTextSecondary: {
        color: '#2E3537',
        opacity: 0.5,
      },
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
      h4: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
    MuiTableCell: {
      body: {
        color: '#2E3537',
        fontWeight: 200,

        '&:first-child': {
          paddingLeft: '32px',
        },
      },
      root: {
        fontSize: '16px',
        fontWeight: 300,
      },
      head: {
        fontWeight: 500,
        color: '#2E3537',
        fontSize: '16px',

        '&:first-child': {
          paddingLeft: '32px',
        },
      },
    },
    MuiInputBase: {
      input: {
        '&::-webkit-input-placeholder': {
          color: '#2E3537',
          opacity: 0.2,
        },
      },
    },
    MuiButton: {
      containedSecondary: {
        color: '#2E3537',
      },
      containedSizeLarge: {
        padding: '7px 30px',
      },

      // outlinedPrimary: {
      //   border: '1px solid #FFFFFF',
      //   borderRadius: '8px !important',
      //   backgroundColor: 'rgba(216,216,216,0)',
      //   color: '#fff',
      //
      //   '&:hover': {
      //     // this is temporary
      //     border: '1px solid #FFFFFF',
      //     borderRadius: '8px',
      //     backgroundColor: 'rgba(216,216,216,0)',
      //     color: '#fff',
      //   },
      // },
    },
    MuiBreadcrumbs: {
      li: {
        fontWeight: 500,
        fontSize: '14px',
      },
    },
    MuiListItem: {
      gutters: {
        // paddingLeft: '35px',
      },
      button: {
        '&:hover': {
          backgroundColor: '#DAEFDD',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '40px',
      },
    },
    MuiCardHeader: {
      root: {
        padding: '30px',
      },
      title: {
        fontWeight: 500,
      },
      subheader: {
        color: '#354739',
        opacity: 0.5,
        fontSize: '12px',
      },
    },
    MuiCardContent: {
      root: {
        padding: '0 30px',
      },
    },
    MuiCardActions: {
      root: {
        margin: '30px 30px 30px 30px',
        padding: '0',
        display: 'block',
      },
    },

    MuiDialog: {
      paper: {
        borderRadius: '8px',
        boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#fff',
      },
    },

    MuiDialogTitle: {
      root: {
        padding: '16px 30px',
      },
      containedSizeLarge: {
        fontSize: '14px',
        padding: '7px 30px',
      },
    },
    MuiChip: {
      // root: {
      //   backgroundColor: 'transparent',
      // },

      sizeSmall: {
        marginRight: '8px',
        marginBottom: '2px',
        color: '#354739',
        textTransform: 'capitalize',
      },
    },
    /*MuiInputAdornment: {
      root: {
        position: 'absolute',
        right: 0,
      },
    },*/

    MuiTabs: {
      root: {
        // background: 'white',
      },

      indicator: {
        // backgroundColor: '#88816C',
        backgroundColor: '#BCE2C9',
        height: '4px',
        borderRadius: '100px 100px 0 0',
      },
    },

    MuiTab: {
      textColorInherit: {
        opacity: 1,
      },

      wrapper: {
        textTransform: 'capitalize',
        color: '#2E3537',
        fontWeight: 500,
      },
    },

    MuiStepper: {
      root: {
        padding: '0',
      },
    },

    MuiStep: {
      horizontal: {
        paddingLeft: '0',
        paddingRight: '0',
      },
    },

    MuiStepIcon: {
      root: {
        color: '#fff',
        border: '2px solid rgba(188,226,201,0.5)',
        borderRadius: '50%',
        width: '34px',
        height: '34px',
      },

      active: {
        border: '2px solid #BCE2C9',
        padding: '2px',
        width: '42px',
        height: '42px',
        color: '#BCE2C9 !important',
      },

      text: {
        fill: '#2E3537',
        fontWeight: 300,
      },

      completed: {
        border: 'none',
        width: '32px',
        height: '32px',
        color: '#BCE2C9 !important',
      },
    },

    MuiStepLabel: {
      iconContainer: {
        paddingRight: '8px',
        paddingLeft: '8px',
      },
    },

    MuiFormHelperText: {
      root: {
        color: '#f44336',
      },

      contained: {
        margin: '8px 0 0',
        marginLeft: '2px',
      },
    },
  },

  typography: {
    fontFamily: ['Futura', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    color: '#2E3537',
  },
  palette: {
    primary: {
      light: '#C4BA9C',
      main: '#88816C',
      dark: '#656050',
      contrastText: '#fff',
    },
    secondary: {
      light: '#cff5dc',
      main: '#BCE2C9',
      dark: '#9fbfaa',
      contrastText: '#2E3537',
    },
  },
});

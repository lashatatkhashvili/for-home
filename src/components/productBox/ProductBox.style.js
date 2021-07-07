import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  productBoxWrapper: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    // padding: '16px 8px',
  },

  productBox: {
    border: '1px solid #E6CFC0',
    backgroundColor: '#FFFFFF',
    // height: '234px',
    width: '264px',
    height: '384px',
    padding: '8px 7px',
    // background: 'red',

    '&.selected, &.selected:hover': {
      outline: '3px solid #354739',
    },
  },

  productBoxImage: {
    width: '248px',
    height: '208px',
  },

  productName: {
    fontSize: '16px',
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: '8px',
    marginBottom: '10px',
    height: '50px',
    // color: '#2E3537',
  },

  productNameUnderline: {
    border: '1px solid #88816C',
    width: '216px',
    margin: '0 0 15px auto',
  },

  productBoxSeeMore: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#88816C',
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  // productBoxWrapper: {
  //   marginBottom: '24px',
  //   width: '100%',
  //   height: '100%',
  //   cursor: 'pointer',
  // },
  //
  // cardMedia: {
  //   height: '234px',
  //   width: '264px',
  //   // border: '3px solid transparent',
  //
  //   '&.selected, &.selected:hover': {
  //     outline: '3px solid #354739',
  //   },
  // },
  //
  // selectedProductBox: {
  //   border: '3px solid #354739',
  // },
  //
  // cardMediaOverlay: {
  //   background: 'linear-gradient(0deg, rgba(230,207,192,0) -20%, #E6CFC0 100%)',
  //   height: '100%',
  //
  //   '&:hover': {
  //     background: 'linear-gradient(0deg, rgba(46,53,55,0.46) 0%, #2E3537 100%)',
  //   },
  // },
  //
  // cardMediaContent: {
  //   height: '100%',
  //
  //   '&:hover': {
  //     color: 'white',
  //   },
  //
  //   '& .cardMediaHoverContent': {
  //     display: 'none',
  //   },
  //
  //   '&:hover .cardMediaHoverContent': {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-around',
  //     alignItems: 'center',
  //     height: '100%',
  //   },
  //
  //   '&:hover .cardMediaCurrentContent': {
  //     display: 'none',
  //   },
  // },
  //
  // productName: {
  //   textAlign: 'center',
  //   padding: '0 5px',
  // },
  //
  // productDescription: {
  //   // white-space: nowrap;
  //   // width: 170px;
  //   // whiteSpace: 'wrap',
  //   textOverflow: 'ellipsis',
  //   overflow: 'hidden',
  //   fontSize: '14px',
  //   fontWeight: 300,
  //   color: '#fff',
  //   height: '57px',
  //   width: '232px',
  //   textAlign: 'center',
  //   letterSpacing: '0.26px',
  //
  //   '& a': {
  //     color: 'white',
  //   },
  // },
  //
  // productPrice: {
  //   color: '#fff',
  //   fontSize: '20px',
  //   fontWeight: 500,
  //   borderBottom: '1px solid #bce2c9',
  // },
  //
  // productGift: {
  //   color: '#FBEBDE',
  //   fontSize: '28px',
  //   fontWeight: 500,
  //   lineHeight: '32px',
  //   paddingBottom: '5px',
  //   borderBottom: '1px solid #bce2c9',
  // },
  //
  // moreInfoButton: {
  //   color: 'white',
  //   border: '1px solid #BCE2C9',
  //   fontSize: '14px',
  //   fontWeight: 500,
  //   padding: '6px 16px',
  //   textDecoration: 'underline',
  // },
}));

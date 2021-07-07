export default theme => ({
  label: {
    zIndex: 99999,
    top: '-10px',
    left: '10px',
    fontSize: '14px',
  },
  shrinkedLabel: {
    transform: 'translate(0, 4px) scale(0.75)',
    padding: '0px 4px',
    backgroundImage: 'linear-gradient(to bottom, #f1f2f4 55%, #fff 55%)',
    borderRadius: '3px',
  },
  list: {
    padding: '0',
  },
  select: {
    // backgroundColor: 'red',
  },
  wrapper: {
    border: '1px solid #88816c',
    borderRadius: '8px',
    marginTop: '8px',
  },
  menuItem: {
    margin: '8px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'rgb(250, 245, 242)',
    },
  },
  activeItem: {
    backgroundColor: 'rgb(250, 245, 242)',
  },
  formControlRoot: {
    '& .Mui-focused .MuiSelect-root': {
      borderColor: theme.palette.primary.main,
    },
  },
});

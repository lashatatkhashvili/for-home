export default theme => ({
  chatForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // padding: '10px 20px',
    // background: 'red',
  },

  attachPhoto: {
    opacity: 0.5,
    width: '140px',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  hidden: {
    display: 'none',
  },

  chatFormText: {
    // background: 'red',
    background: 'white',
    marginLeft: '10px',

    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '40px',
    },

    '& .MuiOutlinedInput-input': {
      padding: '13px 17px',
    },

    '&:focus': {
      color: 'red',
    },
  },

  sendButton: {
    marginRight: '10px',
    opacity: 0.2,
    cursor: 'pointer',
  },
});

import { makeStyles } from '@material-ui/core';

export default makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: '1',
    fontSize: '14px',
    marginRight: '29px',
  },
  labelWrapper: {
    display: 'flex',
    fontSize: 'inherit',
    marginBottom: '4px',
    justifyContent: 'space-between',
  },
  label: {
    color: '#2e3537',
    lineHeight: '1.43',
    fontSize: 'inherit',
    fontWeight: 'normal',
  },
  voteCount: {
    lineHeight: '1.43',
    fontSize: 'inherit',
    fontWeight: 'normal',
    color: 'rgba(46, 53, 55, 0.5)',
  },
  barWrapper: {
    width: '100%',
    height: '8px',
    overflow: 'hidden',
    borderRadius: '4px',
    backgroundColor: 'rgba(103, 129, 137, 0.1)',
  },
  bar: {
    height: '100%',
    borderRadius: '4px',
    backgroundColor: '#f8d0b6',
    transition: 'all 0.7s ease-out',
  },
  percentage: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#678189',
    minWidth: 60,
  },
});

import { connect } from 'react-redux';
import SideMenu from './SideMenu';
import { logoutUser } from '../../reducers/auth/auth.actions';
import { selectAuth } from '../../reducers/auth/auth.selectors';

const mapStateToProps = state => {
  return {
    currentUser: selectAuth(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

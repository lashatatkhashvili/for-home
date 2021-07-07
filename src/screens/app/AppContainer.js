import { connect } from 'react-redux';
import App from './App';
import { getCurrentUser, logoutUser } from '../../reducers/auth/auth.actions';
import { selectAuth, selectRoleId } from '../../reducers/auth/auth.selectors';

const mapStateToProps = state => {
  return {
    auth: selectAuth(state),
    roleId: selectRoleId(state),
  };
};

const mapDipatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(App);

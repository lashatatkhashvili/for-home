import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { selectAuth, selectRoleId } from '../../reducers/auth/auth.selectors';

const mapStateToProps = state => {
  return {
    auth: selectAuth(state),
    roleId: selectRoleId(state),
  };
};

export default connect(mapStateToProps)(PrivateRoute);

import { connect } from 'react-redux';
import PublicRoute from './PublicRoute';
import { selectAuth } from '../../reducers/auth/auth.selectors';

const mapStateToProps = state => {
  return {
    auth: selectAuth(state),
  };
};

export default connect(mapStateToProps)(PublicRoute);

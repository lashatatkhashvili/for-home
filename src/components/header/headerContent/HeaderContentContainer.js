import { connect } from 'react-redux';
import HeaderContent from './HeaderContent';
import { selectAuthUser } from '../../../reducers/auth/auth.selectors';
import { logoutUser } from '../../../reducers/auth/auth.actions';
import { selectGlobalMessage , selectGlobalMessageType } from '../../../reducers/mixed/mixed.selectors';
import { clearGlobalMessage } from '../../../reducers/mixed/mixed.actions';

const mapStateToProps = state => {
  return {
    user: selectAuthUser(state),
    globalMessage: selectGlobalMessage(state),
    globalMessageType: selectGlobalMessageType(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearGlobalMessage: () => dispatch(clearGlobalMessage()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContent);

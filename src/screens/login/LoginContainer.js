import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../reducers/auth/auth.actions';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password, roleId) => dispatch(loginUser(email, password, roleId)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);

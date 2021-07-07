import { connect } from 'react-redux';
import { selectAuthUser} from '../../reducers/auth/auth.selectors';
import Content from './Content';


const mapStateToProps = state => {
  return {
    authUser: selectAuthUser(state),

  };
};
const mapDipatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps)
( Content);

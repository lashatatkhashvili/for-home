import CarpoolItem from './CarpoolItem';
import {connect} from 'react-redux'
import { selectAuthUser } from '../../reducers/auth/auth.selectors';

const mapStateToProps = state => {
  return {
    user: selectAuthUser(state)
  }
}

export default connect(mapStateToProps)(CarpoolItem);
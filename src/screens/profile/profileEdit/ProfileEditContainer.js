import { connect } from 'react-redux';
import { selectAuthUser, selectIsLoadingUpdateUserInfo , selectIsLoadingUpdateUserPassword} from '../../../reducers/auth/auth.selectors';
import ProfileEditForm from './ProfileEditForm';
import { updateUserInfo , updateUserPassword , userChangedProfileImage } from '../../../reducers/auth/auth.actions';
import { setGlobalMessage } from '../../../reducers/mixed/mixed.actions';


const mapStateToProps = state => {
  return {
    authUser: selectAuthUser(state),
    isLoadingUpdateUserInfo : selectIsLoadingUpdateUserInfo(state),
    isLoadingUpdateUserPassword : selectIsLoadingUpdateUserPassword(state),

  };
};
const mapDipatchToProps = dispatch => {
  return {
    updateUserInfo : data => dispatch(updateUserInfo(data)),
    updateUserPassword : data => dispatch(updateUserPassword(data)),
    userChangedProfileImage : () => dispatch(userChangedProfileImage()),
    setGlobalMessage : (type, message) => dispatch(setGlobalMessage(type, message)),
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps)
( ProfileEditForm);

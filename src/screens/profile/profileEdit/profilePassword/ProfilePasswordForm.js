import ProfileEditPassword from './ProfileEditPassword';
import { withFormik } from 'formik';
import { updateUserPasswordSchema } from '../../../../validation/usersSchemas';
import * as routes from '../../../../constants/routes';
import i18n from 'i18next';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { authUser } = props;

    let values = {
      password : '',
      new_password : '',
      new_password_confirmation : ''
    };

    return values;
  },

  validationSchema: updateUserPasswordSchema,

  handleSubmit: (values, { props , setFieldError}) => {

    const { authUser , updateUserPassword , setGlobalMessage , history } = props;
    const data = {
      user_id : authUser.id,
      ...values
    };

    updateUserPassword(data).then(res => {
      if(res){
        setGlobalMessage(true , i18n.t('Your password have been successfully changed'));
        history.push(routes.HOME);
      }
    }).catch(() => {
      setFieldError('password', i18n.t('Password is incorrect'));
    });
  },


})(ProfileEditPassword);

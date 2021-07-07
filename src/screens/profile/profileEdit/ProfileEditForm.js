import ProfileEdit from './ProfileEdit';
import { withFormik } from 'formik';
import { updateUserSchema } from '../../../validation/usersSchemas';
import * as routes from '../../../constants/routes';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { authUser } = props;

    let values = {
      avatar: {
        file: null,
        src: '',
      },
      name: '',
      phone: '',
    };

    if(authUser){
      let image = {
        file : null,
        src : ''
      };
      image.src = authUser.avatar;
      values = {
        ...values,
        avatar : image,
        name : authUser.name,
        phone : authUser.phone
      }
    }


    return values;
  },

  validationSchema: updateUserSchema,

  handleSubmit: (values, { props }, isNew) => {
    const { authUser , updateUserInfo , userChangedProfileImage, setGlobalMessage, history  } = props;


    var formData = {};

    if(values.avatar.file){
      formData = {
        ...values,
        avatar : values.avatar.file
      };
      userChangedProfileImage();

    }else{
      formData = {
        name : values.name,
        phone : values.phone
      }
    }


    const data = {
      user_id : authUser.id,
      ...formData
    };
    updateUserInfo(data).then(res => {
      if(res){
        setGlobalMessage(true , 'Your profile have been successfully updated');
        history.push(routes.HOME);
      }

    })
  },


})(ProfileEdit);

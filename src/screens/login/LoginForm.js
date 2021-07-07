import Login from './Login';
import { withFormik } from 'formik';
import { getRoleByDomain } from '../../utils/helpers';
import { loginSchema } from '../../validation/loginSchemas';
import Analytics from '../../network/analytics/Analytics';

export default withFormik({
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
    };
  },

  validationSchema: loginSchema,

  handleSubmit: (values, { props, setErrors }) => {
    const { loginUser } = props;
    const { email, password } = values;

    const roleId = getRoleByDomain();

    loginUser(email, password, roleId)
      .then(response => {
        const { user } = response;
        Analytics.setUser(user);
      })
      .catch(errors => {
        const { response } = errors;
        setErrors({ unauthorized: response.data.message });
      });
  },
})(Login);

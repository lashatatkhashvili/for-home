import { withFormik } from 'formik';
import SimpleContactForm from './SimpleContactForm';
import { generalContactFormSchema } from '../../validation/contactSchemas';
import contactService from '../../services/contactService';

export default withFormik({
  enableReinitialize: true,

  mapPropsToStatus: props => {
    return {
      submitted: false,
    };
  },

  mapPropsToValues: props => {
    const { origin } = props;

    const values = {
      origin: origin || '',
      message: '',
    };

    return values;
  },

  validationSchema: generalContactFormSchema,


  handleSubmit: (values, { resetForm, setSubmitting, setStatus }) => {

    setSubmitting(true);
    setStatus({ submitted: true });
    contactService.sendGeneralContact(values).then(() => {
      setTimeout(() => {
        resetForm();
      }, 1500);
    });
  },
})(SimpleContactForm);

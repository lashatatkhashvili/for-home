import { withFormik } from 'formik';
import ContactDrawer from './ContactDrawer';
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

  handleSubmit: (values, { props, resetForm, setSubmitting, setStatus }) => {
    const { onClose, onContacted } = props;

    setSubmitting(true);
    setStatus({ submitted: true });
    contactService.sendGeneralContact(values).then(() => {
      setTimeout(() => {
        onClose();
        resetForm();
        onContacted();
      }, 1500);
    });
  },
})(ContactDrawer);

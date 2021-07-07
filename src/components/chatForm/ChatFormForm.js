import { withFormik } from 'formik';
import ChatForm from './ChatForm';

export default withFormik({
  mapPropsToValues: props => {
    let values = {
      attachment: null,
      message: '',
    };

    return values;
  },

  handleSubmit: (values, { resetForm, props }) => {
    // prevent from empty message creation
    if (!values.message && !values.attachment) return;

    // build message object
    const message = {
      text: values.message,
      attachment: values.attachment,
    };

    props.onSubmit(message);
    resetForm();
  },
})(ChatForm);

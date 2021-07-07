import NewPostDialog from './NewUpsaleDialog';
import { withFormik } from 'formik';
import { getPublicFileUrl } from '../../../../../utils/helpers';
import { upsalesSchema } from '../../../../../validation/upsaleSchema';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { currentTemplate } = props;

    let values = {
      title: '',
      data: '',
      image: null,
      description: '',
      type: 0,
      buttonText: '',
    };

    if (currentTemplate && currentTemplate.id) {
      const { id, title, image, description, data, type, fileId, buttonText } = currentTemplate;
      values = {
        id,
        title,
        image: {
          id: fileId,
          src: getPublicFileUrl(fileId),
        },
        buttonText: buttonText,
        description,
        type: type,
        data,
      };
    }

    return values;
  },

  validationSchema: upsalesSchema,

  handleSubmit: (values, { props, setFieldError }, isNew) => {
    const { currentTemplate, updateUpsale, createUpsale } = props;

    if (currentTemplate && currentTemplate.id) {
      updateUpsale(currentTemplate.id, values);
    } else {
      createUpsale(values);
    }
    props.onClose();
    props.closeAnchor();
  },
})(NewPostDialog);

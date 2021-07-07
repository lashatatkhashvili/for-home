import NewPostDialog from './NewTemplateDialog';
import { withFormik } from 'formik';
import { announcementSchema, templateSchema } from '../../../../../../validation/templateSchema';
import { getPublicFileUrl } from '../../../../../../utils/helpers';
import { CONTENT_TEMPLATE_TYPES } from '../../../../../../constants/misc';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { currentTemplate } = props;

    let values = {
      title: '',
      published_at: null,
      expires_at: null,
      type: 'Announcement',
      images: [],
      description: '',
      tags: [],
      category: 0,
      locale: 0,

      metaType: '',
      metaValue: '',
    };

    if (currentTemplate && currentTemplate.id) {
      const {
        id,
        title,
        published_at,
        expires_at,
        type,
        images,
        description,
        category,
        tags,
        locale,
        meta,
      } = currentTemplate;

      values = {
        id,
        title,
        tags,
        published_at,
        expires_at,
        type,
        images: images.map(i => {
          return {
            id: i.id,
            src: getPublicFileUrl(i.file_id),
          };
        }),
        description,
        category: category ? category.id : 0,
        locale,
        metaType: meta[0].metaType,
        metaValue: meta[0].metaValue,
      };
    }

    return values;
  },

  validationSchema: announcementSchema,

  handleSubmit: (values, { props }, isNew) => {
    const { currentTemplate, udateTemplateAction, createTemplateAction } = props;
    const formValues = { ...values, meta: [{ key: values.metaType, value: values.metaValue }] };

    if (currentTemplate && currentTemplate.id) {
      udateTemplateAction(formValues, currentTemplate.id);
    } else {
      createTemplateAction(formValues);
    }
    props.onClose();
    props.closeAnchor();
  },
})(NewPostDialog);

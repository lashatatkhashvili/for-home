import NewPostDialog from './NewTemplateDialog';
import { withFormik } from 'formik';
import { templateSchema } from '../../../../../../validation/templateSchema';
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
      type: 'Post',
      images: [],
      description: '',
      tags: [],
      category : 0,
      locale : 0,
      milestones : [],
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
        milestones
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
        category: category && category.id,
        locale,
        milestones
      };
    }

    return values;
  },

  validationSchema: templateSchema,

  handleSubmit: (values, { props }, isNew) => {
    const { currentTemplate, udateTemplateAction, createTemplateAction } = props;

    if (currentTemplate && currentTemplate.id) {
      udateTemplateAction(values, currentTemplate.id);
    } else {
      // let formValues = { ...values };
      //
      // if (values.type === CONTENT_TEMPLATE_TYPES.announcements) {
      //   formValues = { ...formValues, meta: [{ key: values.metaType, value: values.metaValue }] };
      // }

      createTemplateAction(values);
    }
    props.onClose();
    props.closeAnchor();
  },
})(NewPostDialog);

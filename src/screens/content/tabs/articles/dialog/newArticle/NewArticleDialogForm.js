import NewPostDialog from './NewArticleDialog';
import { withFormik } from 'formik';
import { getPublicFileUrl } from '../../../../../../utils/helpers';
import { articleSchema } from '../../../../../../validation/articleSchema';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { currentTemplate } = props;

    let values = {
      title: '',
      url: '',
      images: [],
      description: '',
      category : 0,

    };

    if(currentTemplate && currentTemplate.id){

      const { id , title, images , description , category , url} = currentTemplate;
      values = {
        id,
        title,
        images : images && Boolean(images.length) && images.map(i => {
          return {
            id  : i.id,
            src : getPublicFileUrl(i.file_id)
          }
        }),
        url,
        description,
        category : category.id
      }
    }

    return values;
  },

  validationSchema: articleSchema,

  handleSubmit: (values, { props , setFieldError}, isNew) => {

    const { currentTemplate , updateArticle , createArticle } = props;


    if(currentTemplate && currentTemplate.id){

      updateArticle(values , currentTemplate.id);

    }else{
      createArticle(values);
    }
    props.onClose();
    props.closeAnchor()
  },


})(NewPostDialog);

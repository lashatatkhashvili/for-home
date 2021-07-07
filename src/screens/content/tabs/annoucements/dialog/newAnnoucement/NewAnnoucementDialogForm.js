import NewPostDialog from './NewAnnoucementDialog';
import { withFormik } from 'formik';
import { getPublicFileUrl } from '../../../../../../utils/helpers';
import { annoucementSchema } from '../../../../../../validation/annoucementSchema';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { currentTemplate } = props;

    let values = {
      title: '',
      data: '',
      image: null,
      description: '',
      type : 0,

    };

    if(currentTemplate && currentTemplate.id){

      const { id , title, image , description , data , type} = currentTemplate;
      values = {
        id,
        title,
        image : {
            id  : image.id,
            src : getPublicFileUrl(image.file_id)
          },
        description,
        type : type,
        data
      }
    }

    return values;
  },

  validationSchema: annoucementSchema,

  handleSubmit: (values, { props , setFieldError}, isNew) => {

    const { currentTemplate , updateAnnoucement , createAnnoucement } = props;


    if(currentTemplate && currentTemplate.id){

      updateAnnoucement(values , currentTemplate.id);

    }else{
      createAnnoucement(values);
    }
    props.onClose();
    props.closeAnchor()
  },


})(NewPostDialog);

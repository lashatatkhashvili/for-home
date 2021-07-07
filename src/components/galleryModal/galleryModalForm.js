import galleryModal from './galleryModal';
import { withFormik } from 'formik';
import { gallerySchema } from '../../validation/gallerySchema';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {

    const { currentImage } = props;


    let values = {
      name : '',
      tags : [],
      images : ''
    };

    if(currentImage){
      values = {
        name : currentImage.name,
        images : currentImage.image,
        tags : currentImage.tags
      }
    }

    return values;
  },

  // validationSchema: gallerySchema,

  handleSubmit: (values, { props }, isNew) => {
    if(props.currentImage){
      props.createGalleryItemAction(values , props.currentImage);
    }else{
      props.createGalleryItemAction(values);
    }
    props.onClose();
  },


})(galleryModal);

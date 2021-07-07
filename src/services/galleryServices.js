import AppAPI from '../network/AppAPI';
import { serializeGallery } from '../serializers/Gallery.serializer';

class galleryServices {

  static getGalleryItems = () => {
    return AppAPI.get('/gallery').then(response => {
      return serializeGallery(response[0])
    });
  };
  static createGalleryItems = data => {
    return AppAPI.postFile('/gallery/add-image' , data).then(response => {
      return response
    });
  };
  static updateGalleryItems = data => {
    return AppAPI.post('/gallery/add-image' , data).then(response => {
      return response
    });
  };
  static deleteGalleryImages = id => {
    return AppAPI.delete('/gallery' , [id]).then(response => {
      return response
    });
  };
}

export default galleryServices;

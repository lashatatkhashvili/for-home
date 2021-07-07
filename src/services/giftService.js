import AppAPI from '../network/AppAPI';
import {
  serializeGifts,
  // serializeGift,
  serializeOccasions,
  serializeProducts,
  serializeCreateGiftRequest,
} from '../serializers/Gift.serializer';

class giftService {
  static fetchGifts = params => {
    return AppAPI.get(`/gifts`, params).then(response => {
      return serializeGifts(response);
    });
  };

  static fetchGiftsOccasion = () => {
    return AppAPI.get(`/occasions`).then(response => {
      return serializeOccasions(response);
    });
  };

  static fetchProducts = data => {
    return AppAPI.get(`/gifts/products/wsdl`, {
      max_price: data.maxPrice,
      current_page: data.currentPage,
      // page_size: data.pageSize,
    }).then(response => {
      return serializeProducts(response);
    });
  };

  static createGift = data => {
    return AppAPI.post(`/gifts/create`, serializeCreateGiftRequest(data)).then(response => {
      // console.log('created gift', response);

      return response;
    });
  };
}

export default giftService;

import AppAPI from '../network/AppAPI';
import { serializeCreditCard } from '../serializers/Payment.serializer';

class paymentService {
  static fetchCreditCards = () => {
    return AppAPI.get(`/payments/tokens`).then(response => {
      return response.map(serializeCreditCard);
    });
  };

  static fetchIframe = (packageId, amount, info) => {
    const params = {
      amount: amount,
      Info: info, // Note: don't change "Info" to lowercase
      order: packageId,
    };
    return AppAPI.post(`/start_checkout`, params).then(response => {
      return {
        iframe: response.web_view_url,
        paymentId: response.paymentlogid,
      };
    });
  };

  static checkPaymentStatus = (paymentId) => {
    return AppAPI.get(`/payments/check_log/${paymentId}`).then(response => {
      return {
        statusCode: response.status_code,
        messsage: response.message,
      };
    });
  };

  static payWithSavedCard = (token, buildingId, packageId, dateTime, coin) => {
    const params = {
      token: token,
      Info: 'aaa',
      Order: packageId,
      datetime: dateTime,
      buildingid: buildingId,
      Coin: coin,
    };
    return AppAPI.post(`/payments/quick`, params).then(response => {
      return {
        statusCode: parseInt(response.CCode),
        message: response.message,
      };
    });
  };

  static deleteLastCreditCard = () => {
    return AppAPI.delete(`/payments/token`);
  };
}

export default paymentService;

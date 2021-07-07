import AppAPI from '../network/AppAPI';
import { serializeInterests } from '../serializers/Interests.serializer';

class interestService {
  static fetchInterests = () => {
    return AppAPI.get(`/interests`).then(response => {
      return serializeInterests(response);
    });
  };
}

export default interestService;

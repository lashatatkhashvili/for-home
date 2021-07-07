import AppAPI from '../network/AppAPI';
import { serializeAuthenticatedUser , serializeAuthenticatedUserObject } from '../serializers/Auth.serializer';

class authService {
  static loginUser = (email, password, roleId) => {
    return AppAPI.post(`/auth/login`, { email, password, role_id: roleId }).then(response => {
      return serializeAuthenticatedUser(response);
    });
  };

  static signupUser = user => {
    return AppAPI.post(`/auth/signup`, user).then(response => {
      return response;
    });
  };


  static updateUserInfo = data => {
    return AppAPI.postFile(`/users/change_data`, data).then(response => {
      return serializeAuthenticatedUserObject(response);
    });
  };

  static updateUserPassword = data => {
    return AppAPI.post(`/users/change_password` , data).then(response => {
      return response;
    });
  };
}

export default authService;

import axios from 'axios';
// import ApiUtils from './ApiUtils';

class NetworkManager {
  static fetch(route, method, body, isFormData) {
    return axios(this._getUrl(route), {
      method,
      headers: this._getHeaders(isFormData),
      data: isFormData ? body : this._getBody(body),
      //validateStatus: status => ApiUtils.checkStatus(status)
      withCredentials: true,
      credentials: 'same-origin',
    })
      .then(response => {
        // console.log(`Method: ${method}, Route: ${route}, Body: ${body}`);
        return response.data;
      })
      .catch(error => {
        throw error;
        /* ApiUtils.notifyRequestError(new Error(JSON.stringify(error)), error.response.data);
                 throw ApiUtils.generalErrors(error);*/
      });
  }

  static setToken(token) {
    //Call this function to set token when app is loaded/ after login.
    //this._token = `${token}`;
    localStorage.setItem('user', JSON.stringify(token));
  }

  static updateUser(user) {
    const lsUser = JSON.parse(localStorage.getItem('user')) || {};
    lsUser.user = user;
    localStorage.setItem('user', JSON.stringify(lsUser));
  }

  static _getToken() {
    // return this._token; //Retrieves current token
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return user.accessToken;
  }

  static removeToken() {
    // this._token = null; //Remove token when user log out.
    localStorage.removeItem('user');
  }

  static _getUrl(route) {
    return `${process.env.REACT_APP_API_URL}${route}`;
  }

  static _getHeaders(isFormData) {
    const contentType = isFormData ? 'multipart/form-data' : 'application/json';

    return {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      Authorization: 'Bearer ' + this._getToken(),
      'Access-Control-Allow-Origin': '*',
    };
  }

  static _getBody(body, isFormData) {
    return JSON.stringify(body);
  }

  static download(route, type, body, isFormData) {
    return axios(this._getUrl(route), {
      method: 'GET',
      headers: this._getHeaders(),
      data: isFormData ? body : this._getBody(body),
      withCredentials: true,
      credentials: 'same-origin',
      responseType: 'blob', // Most important detail in this axios declaration
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }
}

export default NetworkManager;

const ERROR_CODES = {
  402: {
    message: 'PAYMENT_REQUIRED',
  },
};

const parseWellKnownErrorCodes = response => {
  const { status = 0 } = response;
  const error = ERROR_CODES[status];
  if (error) {
    return {
      errorCode: status,
      errorMessage: error.message,
    };
  }
  return null;
};

const generalErrors = (response, text) => {
  const error = new Error(response.status);
  error.status = response.status;

  console.log(response);
  const knowError = parseWellKnownErrorCodes(response);
  if (knowError) {
    error.body = knowError;
  } else {
    try {
      const jsonError = JSON.parse(text);
      error.body = {};
      error.body.errorCode = jsonError.error_code;
      error.body.errorMessage = jsonError.error_message;
    } catch (e) {
      error.body = {};
      error.body.errorCode = null;
      error.body.errorMessage = null;
    }
  }

  return error;
};

const ApiUtils = {
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      // return response.text().then(text => {
      //   throw generalErrors(response, text);
      // });
      return response;
    }
  },
};

export default ApiUtils;

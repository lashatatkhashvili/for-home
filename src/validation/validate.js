export const validateYupSync = (schema, values) => {
  try {
    schema.validateSync(values, {
      abortEarly: false,
    });
  } catch (ex) {
    return yupErrorsToObjects(ex);
  }

  return null;
};

export const yupErrorsToObjects = exceptions => {
  const errors = {};

  exceptions.inner.forEach(error => {
    errors[error.path] = error.message;
  });

  return errors;
};

export const serializeEventContact = formValues => {
  return {
    num_people: formValues.people,
    concept: formValues.budget,
    budget: formValues.concept,
    info: formValues.message
  };
};

export const serializeGeneralContact = formValues => {
  return {
    origin: formValues.origin,
    text: formValues.message
  };
};
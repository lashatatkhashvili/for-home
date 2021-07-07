export const getDataFromLocalStorage = item => {
  return JSON.parse(localStorage.getItem(item));
};

export const setDataToLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const clearDataFromLocalStorage = () => {
  localStorage.clear();
};

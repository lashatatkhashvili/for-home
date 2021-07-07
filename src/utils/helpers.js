import moment from 'moment';
import rolesToDomains from '../constants/domains';
import store from '../store';
import { selectRoleId } from '../reducers/auth/auth.selectors';
import * as routes from '../constants/routes';
import { TENANT_SELF_REGISTRATION_FORM_BUILDING_ID_SUFFIX } from '../constants/misc';
import { ADMIN, COMMUNITYMANAGER, HR, LANDLORD, SUPER_ADMIN } from '../constants/roles';
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export const displayDate = date => {
  if (!date) return '';
  let momentDate = moment(date);
  return momentDate.format('MMM Do YYYY');
};

export const displayDateFromNow = date => {
  let momentDate = moment(date);
  return momentDate.fromNow();
};

export const displayDateDateAndTime = date => {
  let momentDate = moment(date, 'YYYY-MM-DD HH:mm');
  return momentDate.format('DD/MM/YYYY HH:mm');
};

export const transformBuildingUsers = users => {
  return Object.keys(users)
    .map(usersItem => users[usersItem])
    .flat();
};

export const getEditRoute = match => {
  return match.path.split(':id')[0];
};

export const getCurrentUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const convertAnalyticsUsageToHighchartsSeries = (data, mapDataKeysToLabels) => {
  if (!data) return [];
  return Object.keys(data).map(rowKey => {
    const rowData = data[rowKey];
    return {
      name: mapDataKeysToLabels[rowKey],
      data: rowData,
    };
  });
};

export const convertObjectToFormData = object => {
  const formData = new FormData();

  for (let key in object) {
    if (object[key] !== undefined) {
      formData.append(key, object[key]);
    }
  }

  return formData;
};

export const convertErrorsArrayToObject = (errorsObject, mapErrorsToInputNames) => {
  const errors = {};

  for (let error in errorsObject) {
    const errorMessage = errorsObject[error][0];
    if (error in mapErrorsToInputNames) {
      errors[mapErrorsToInputNames[error]] = errorMessage;
    } else {
      errors[error] = errorMessage;
    }
  }

  return errors;
};

export const get24Intervals = (startWith = 0) => {
  let intervals = [];

  for (let i = startWith; i < 24 + startWith; i++) {
    const number = Number(i % 24);

    if (number < 10) {
      intervals.push(`0${number}:00`);
    } else {
      intervals.push(`${number}:00`);
    }
  }

  return intervals;
};

export const getRoleByDomain = () => {
  const { href } = window.location;

  let foundRole = null;
  for (let roleId in rolesToDomains) {
    const domains = rolesToDomains[roleId];
    for (let index in domains) {
      const domain = domains[index];
      if (href.includes(domain)) {
        foundRole = roleId;
        break;
      }
    }
    if (foundRole !== null) break;
  }
  return Number(foundRole);
};

export const confirmLinkClick = (event, message) => {
  if (!window.confirm(message)) {
    event.preventDefault();
  }
};

export const prependZero = number => {
  return number < 10 ? `0${number}` : number;
};

export const generateXMinuteIntervals = interval => {
  const intervals = [];
  for (let i = 0; i < 24; i++) {
    var h = i < 10 ? `0${i}` : i;
    for (let j = 0; j < 60; j++) {
      if (j % interval !== 0) continue;
      let m = j < 10 ? `0${j}` : j;
      let full = `${h}:${m}`;
      intervals.push(full);
    }
  }
  return intervals;
};

export const comparator = (sortingKey, isAscending, caster) => {
  if (!caster) caster = value => value;
  return (a, b) => {
    if (caster(a[sortingKey]) < caster(b[sortingKey])) {
      return isAscending ? -1 : 1;
    }
    if (caster(a[sortingKey]) > caster(b[sortingKey])) {
      return isAscending ? 1 : -1;
    }
    return 0;
  };
};

export const destructObjectByKeys = (object, arrayOfKeys) => {
  const destructedObject = {};
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (arrayOfKeys.includes(key)) {
      destructedObject[key] = value;
    }
  });
  return destructedObject;
};

export const castPrimitivesToBoolean = any => {
  switch (true) {
    case Array.isArray(any):
      return any.map(castPrimitivesToBoolean);
    case typeof any === 'object':
      const castedObject = {};
      Object.keys(any).forEach(key => {
        const value = any[key];
        castedObject[key] = castPrimitivesToBoolean(value);
      });
      return castedObject;
    default:
      return true;
  }
};

export const isUserAllowed = roles => {
  const state = store.getState();
  const userRoleId = selectRoleId(state);
  return roles.includes(userRoleId);
};

export const isUserAdmin = () => {
  return isUserAllowed([SUPER_ADMIN, ADMIN]);
};

export const isMobileView = () => {
  return window.outerWidth < 500;
};

export const getUserRolesExceptAdmin = () => {
  return [COMMUNITYMANAGER, HR, LANDLORD];
};

export const requestUserLocation = callback => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      callback(position);
    });
  }
};

export const sliceTimeString = (timeString, sliceNumberFromBegin = 5) => {
  return timeString.slice(0, sliceNumberFromBegin);
};

export const generateMetaObjectForAnalytics = (eventType, eventPayload) => {
  return {
    analytics: {
      eventType: eventType,
      eventPayload: eventPayload,
    },
  };
};

export const getCurrentElements = (currentPage, elementPerPage, elements) => {
  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;

  return elements.slice(indexOfFirstElement, indexOfLastElement);
};

export const validateFileType = (name, validTypes) => {
  const splitted = name.split('.');
  const type = splitted[splitted.length - 1];
  return validTypes.includes(type);
};

export const extractContent = htmlString => {
  var span = document.createElement('span');
  span.innerHTML = htmlString;
  return span.textContent || span.innerText;
};

export const isRTL = language => {
  const rtlLanguages = ['heb'];
  return rtlLanguages.includes(language);
};

export const extractTextFromElement = element => {
  if (Array.isArray(element)) {
    return element.map(extractTextFromElement).join(' ');
  }

  if (!element.props) return element;

  if (element.props.dangerouslySetInnerHTML) {
    return extractContent(element.props.dangerouslySetInnerHTML.__html);
  } else if (!element.props.children) {
    return '';
  }

  const children = element.props.children;

  switch (true) {
    case Array.isArray(children):
      return children.map(extractTextFromElement).join(' ');
    default:
      return children;
  }
};

export const replaceTwoSpacesInInput = input => {
  return input.replace(/\s\s+/g, ' ');
};

export const moveItemInArray = (array, index, direction) => {
  let repositionedArray = [...array];
  let insertIndex = -1;
  const removedItem = repositionedArray.splice(index, 1)[0];
  if (direction === 'up') {
    if (index === 0) return array;
    insertIndex = index - 1;
  } else {
    if (index >= array.length - 1) return array;
    insertIndex = index + 1;
  }
  if (insertIndex < 0) return array;
  repositionedArray.splice(insertIndex, 0, removedItem);
  return repositionedArray;
};

export const percentageKeyGenerator = percentage => {
  let key = '0';
  if (percentage > 80) {
    key = '80';
  } else if (percentage > 60) {
    key = '60';
  } else if (percentage > 40) {
    key = '40';
  } else if (percentage > 20) {
    key = '20';
  }

  return key;
};

export const getPublicFileUrl = fileId => {
  return `${process.env.REACT_APP_API_URL}/files/${fileId}`;
};

export const getPublicFileDownloadUrl = fileId => {
  return `${process.env.REACT_APP_API_URL}/files/${fileId}/download`;
};

export const getFileExtension = fileName => {
  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
};

export function stripHtml(value) {
  var tmp = document.createElement('DIV');
  tmp.innerHTML = value;
  const str = tmp.textContent || tmp.innerText || '';
  return Boolean(str.trim().length);
}

export const urltoFile = (url, filename, mimeType) => {
  return fetch(url)
    .then(function(res) {
      return res.arrayBuffer();
    })
    .then(function(buf) {
      return new File([buf], filename, { type: mimeType });
    });
};

import { LOGOUT_USER } from './auth/auth.actionTypes';
import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import sideMenuReducer from './sideMenu/sideMenu.reducer';
import templateReducer from './template/template.reducer';
import mixedReducer from './mixed/mixed.reducer';
import galleryReducer from './gallery/gallery.reducer';
import articleReducer from './article/article.reducer';
import annoucementReducer from './annoucement/annoucement.reducer';
import surveyReducer from './surveys/surveys.reducer';
import emailTemplates from './emailTemplates/emailTemplates.reducer';
import upsalesReducer from './upsales/upsales.reducer';
import specilDays from './specialDays/specialDays.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  sideMenu: sideMenuReducer,
  mixed: mixedReducer,
  template: templateReducer,
  gallery: galleryReducer,
  article: articleReducer,
  annoucemenent: annoucementReducer,
  surveys: surveyReducer,
  emailTemplates: emailTemplates,
  upsales: upsalesReducer,
  specialDays: specilDays,
});

const rootReducer = (state, action) => {
  // clear full state if LOGOUT_USER action was deteceted
  if (action.type === LOGOUT_USER) {
    state = undefined; // NOTE: set only to 'undefined', not to 'null'
  }
  return appReducer(state, action);
};

export default rootReducer;

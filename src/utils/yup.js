import * as Yup from 'yup';
import i18n from 'i18next';
import { stripHtml } from './helpers';

Yup.setLocale({
  mixed: {
    // eslint-disable-next-line
    required: i18n.t('Field is required'),
  },
  string: {
    // eslint-disable-next-line
    email: i18n.t('Enter valid email'),
    // eslint-disable-next-line
    min: i18n.t('Min. length ${min} symbols'),
    // eslint-disable-next-line
    max: i18n.t('Max. length ${min} symbols'),
    // eslint-disable-next-line
    length: i18n.t('Length should be ${length} symbols'),
  },
  number: {
    // eslint-disable-next-line
    min: i18n.t('Number should be more than ${min}'),
    // eslint-disable-next-line
    max: i18n.t('Number should be less than ${max}'),
    // eslint-disable-next-line
    moreThan: i18n.t('Field is required'),
  },
});

Yup.addMethod(Yup.array, 'unique', function(message, mapper = a => a) {
  return this.test('unique', message, function(list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

Yup.addMethod(Yup.string, 'notOnlySpacesInEditor', function(message, mapper = a => a) {
  return this.test('notOnlySpacesInEditor', message, function(value) {
    return stripHtml(value);
  });
});
export default Yup;

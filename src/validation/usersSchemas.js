import Yup from '../utils/yup';
import i18n from 'i18next';

export const adminSchema = Yup.object().shape({
  adminName: Yup.string().required(),
  adminEmail: Yup.string()
    .email()
    .required(),
  adminUser: Yup.mixed(),
  adminList: Yup.array().test('check unique', i18n.t('Admin is already in list'), function(value) {
    const { adminUser, adminList } = this.parent;
    const checkIsUnique = adminList.find(owner => owner.id === adminUser.id && owner.role === adminUser.role);

    if (checkIsUnique) return false;

    return true;
  }),
});

export const ownerSchema = Yup.object().shape({
  landlordName: Yup.string().required(),
  landlordEmail: Yup.string()
    .email()
    .required(),
  landlordMobilePhone: Yup.number()
    .required()
    .nullable()
    .typeError(i18n.t('Enter valid number')),
  landlordUser: Yup.mixed(),
  landlordList: Yup.array().test('check unique', i18n.t('Landlord is already in list'), function(value) {
    const { landlordUser, landlordList } = this.parent;
    const checkIsUnique = landlordList.find(owner => owner.id === landlordUser.id && owner.role === landlordUser.role);

    if (checkIsUnique) return false;

    return true;
  }),
});

export const tenantSchema = Yup.object().shape({
  tenantName: Yup.string().required(),
  tenantEmail: Yup.string()
    .email()
    .required(),
  tenantPhone: Yup.number()
    .required()
    .typeError(i18n.t('Enter valid number')),
  companyId: Yup.number().required(),
  buildingIds: Yup.array().required(i18n.t('Please select at least one building')),
  // .unique('Building must be unique')
});

export const employeeSchema = Yup.object().shape({
  tenantName: Yup.string().required(),
  tenantEmail: Yup.string()
    .email()
    .required(),
  tenantPhone: Yup.number()
    .required()
    .typeError(i18n.t('Enter valid number')),
  tenantBirthday: Yup.string().required(),
  buildingId: Yup.string().required(i18n.t('Please select at least one building')),
  // .unique('Building must be unique')
  interestIds: Yup.array().required(i18n.t('Please select at least one interests')),
});

export const tenantSelfRegistrationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.number().typeError(i18n.t('Enter valid number')),
  companyId: Yup.number().required(),
  buildingId: Yup.number().required(),
  confirmation1: Yup.bool().oneOf([true], i18n.t('Please check the checkbox')),
  confirmation2: Yup.bool().oneOf([true], i18n.t('Please check the checkbox')),
});

export const importEmployeesSchema = Yup.object().shape({
  users: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string(i18n.t('Invalid name'))
          .min(2)
          .required(),
        surname: Yup.string(i18n.t('Invalid surname'))
          .min(2)
          .required(),
        phone: Yup.string(i18n.t('Invalid phone'))
          .trim()
          .matches(/^([0-9\(\)\/\+ \-]*)$/, 'Phone number is invalid')
          .min(6)
          .required(),
        email: Yup.string('Invalid email')
          .email('Invalid email')
          .required(),
        birthday: Yup.date().required(),
      })
    )
    .required(),
});

export const updateUserSchema = Yup.object().shape({
  name : Yup.string().required(),
  phone : Yup.number().required()
});
export const updateUserPasswordSchema = Yup.object().shape({
  password : Yup.string().required(),
  new_password : Yup.string().required(),
  new_password_confirmation : Yup.string().required().oneOf([Yup.ref('new_password'), null], 'Passwords must match')
});

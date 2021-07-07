import inviteGuest from '../assets/images/icons/inviteGuest.png';
import bookARoom from '../assets/images/icons/bookAroom.png';
import gym from '../assets/images/icons/gym.png';
import community from '../assets/images/icons/community.png';
import rentBike from '../assets/images/icons/rentBike.png';
import carPool from '../assets/images/icons/carPool.png';
import support from '../assets/images/icons/support.png';
import events from '../assets/images/icons/events.png';
import marketplace from '../assets/images/icons/marketpalce.png';
import supermarket from '../assets/images/icons/supermarket.png';
import * as routes from '../constants/routes';
import i18n from 'i18next';
import { SUPER_ADMIN, ADMIN, COMMUNITYMANAGER, HR, LANDLORD } from '../constants/roles';

const SERVICES = {
  1: {
    image: inviteGuest,
    text: i18n.t('Invite Guest'),
    isChecked: false,
    allowedRoles: [],
  },
  // 5: {
  //   image: community,
  //   text: i18n.t('Community'),
  //   isChecked: false,
  //   url: routes.COMMUNITY,
  //   allowedRoles: [SUPER_ADMIN, ADMIN, HR, COMMUNITYMANAGER, LANDLORD],
  // },
  // 8: {
  //   image: support,
  //   text: i18n.t('Support'),
  //   isChecked: false,
  //   url: routes.BUILDING_SUPPORT_TICKETS,
  //   allowedRoles: [SUPER_ADMIN, ADMIN, HR, COMMUNITYMANAGER, LANDLORD],
  // },
  // 6: {
  //   image: bookARoom,
  //   text: i18n.t('Book a Room'),
  //   isChecked: false,
  //   url: routes.BUILDING_ROOMS,
  //   allowedRoles: [SUPER_ADMIN, ADMIN, COMMUNITYMANAGER, LANDLORD],
  // },
  3: {
    image: rentBike,
    text: i18n.t('Bike Rent'),
    isChecked: false,
    allowedRoles: [],
  },
  // 7: {
  //   image: events,
  //   text: i18n.t('Events'),
  //   isChecked: false,
  //   url: routes.BUILDING_EVENT,
  //   allowedRoles: [SUPER_ADMIN, ADMIN, HR, COMMUNITYMANAGER, LANDLORD],
  // },
  2: {
    image: gym,
    text: i18n.t('GYM'),
    isChecked: false,
    allowedRoles: [],
  },
  4: {
    image: carPool,
    text: i18n.t('Car Pool'),
    isChecked: false,
    allowedRoles: [],
  },
  9: {
    // image: carPool,
    // text: i18n.t('Parking'),
    // isChecked: false,
    // url: routes.PARKING,
    // allowedRoles: [SUPER_ADMIN, ADMIN, HR, COMMUNITYMANAGER],
  },
  10: {
    image: marketplace,
    text: i18n.t('Marketplace'),
    isChecked: false,
    // url: routes.MARKETPLACE,
    allowedRoles: [SUPER_ADMIN, ADMIN, HR, COMMUNITYMANAGER],
  },
  11: {
    image: supermarket,
    text: i18n.t('Supermarket'),
    isChecked: false,
    allowedRoles: [],
  },
};

export { SERVICES };

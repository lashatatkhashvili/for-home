import { ADMIN, HR, COMMUNITYMANAGER, LANDLORD } from './roles';

export default {
  [ADMIN]: ['content.dev.wiv.club', 'content.loc.wiv.club', 'admin.loc.wiv.club', 'admin.dev.wiv.club', 'admin.wiv.club'],
  [HR]: ['hr.loc.wiv.club', 'hr.dev.wiv.club', 'hr.wiv.club'],
  [COMMUNITYMANAGER]: ['cm.loc.wiv.club', 'cm.dev.wiv.club', 'cm.wiv.club'],
  [LANDLORD]: ['landlord.loc.wiv.club', 'landlord.dev.wiv.club', 'landlord.wiv.club'],
};

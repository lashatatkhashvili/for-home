export const serializeAuthenticatedUser = response => {
  return {
    accessToken: response.access_token,
    expiresAt: response.expires_at,
    roleId: response.roleId,
    tokenType: response.token_type,
    user: serializeAuthenticatedUserObject(response.user),
  };
};

export const serializeAuthenticatedUserObject = response => {
  return {
    id: response.id,
    avatar: response.avatar,
    cardNumber: response.card_number,
    createdAt: response.created_at,
    downloadedApp: response.downloaded_app,
    email: response.email,
    emailVerifiedAt: response.email_verified_at,
    isActive: response.is_active,
    isAdmin: response.is_admin,
    licensePlate: response.license_place,
    name: response.name,
    phone: response.phone,
    roles: response.roles,
  };
};

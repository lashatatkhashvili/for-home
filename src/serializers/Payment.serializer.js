export const serializeCreditCard = response => {
  return {
    id: response.id,
    token: response.token,
    lastDigits: response.ccnum,
    expiration: response.expdate,
    userIdentity: response.user_identity,
    createdAt: response.created_at,
  };
};
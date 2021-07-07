export const serializeInterests = (response) => {
  return response ? response.map(interest => serializeInterest(interest)) : [];
}

export const serializeInterest = (interest) => {
  return {
    id: interest.id,
    name: interest.interest
  }
}
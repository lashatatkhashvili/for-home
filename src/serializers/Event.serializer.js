import moment from 'moment';

export const serializeEvent = (event, isPrevious = false) => {
  return {
    id: event.id,
    title: event.title,
    description: event.description,
    image: event.image,
    buildingId: event.building_id,
    location: event.location,
    date: event.date,
    endDate: event.end_date,
    isGoing: event.is_going,
    userId: event.user_id,
    participants: event.participants ? event.participants.map(serializeEventParticipant) : [],
    isPrivate: event.private,
    isPrevious,
  };
};

export const serializePreviousEvents = res => {
  return {
    events: res.data.map(event => serializeEvent(event, true)),
    currentPage: res.current_page,
    lastPage: res.last_page,
  };
};

export const serializeEventParticipant = participant => {
  return {
    id: participant.id,
    userId: participant.user_id,
    isGoing: participant.is_going,
    name: participant.name,
    phone: participant.phone,
    email: participant.email,
    avatar: participant.avatar,
  };
};

export const serializeCreateEventRequest = (buildingId, formValues) => {
  return {
    building_id: buildingId,
    title: formValues.title,
    location: formValues.location,
    date: moment(`${formValues.date.format('YYYY-MM-DD')} ${formValues.startTime.format('HH:mm')}`)
      .utc()
      .format('YYYY-MM-DD HH:mm:ss'),
    end_date: moment(`${formValues.date.format('YYYY-MM-DD')} ${formValues.endTime.format('HH:mm')}`)
      .utc()
      .format('YYYY-MM-DD HH:mm:ss'),
    description: formValues.description,
    image: formValues.image.file,
    private: formValues.isPrivate ? 1 : 0,
  };
};

import { serializeInterests } from './Interests.serializer';

export const serializeUserObject = (user, buildingId) => {
  return {
    name: user.name,
    email: user.email,
    password: '123123',
    password_confirmation: '123123',
    phone: user.phone,
    building_id: buildingId,
    role_id: user.role,
  };
};

export const serializeUserObjectWithInterests = user => {
  return {
    name: user.name,
    email: user.email,
    password: '123123',
    password_confirmation: '123123',
    phone: user.phone,
    building_id: user.buildingId,
    role_id: user.role,
    interests: user.interestIds,
    birthday: user.birthday,
  };
};

export const serializeUsersObjectsWithInterests = users => {
  const serializedUsers = users.map(user => serializeUserObjectWithInterests(user));

  return serializedUsers;
};

export const serializeUser = user => {
  return {
    id: user.user_id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role_id,
    companyId: user.company_id,
  };
};

export const serializeUserWithBuildings = user => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    phone: user.phone,
    buildingIds: user.buildingIds,
    companyId: user.company_id,
    created: user.created_at,
    isActive: Boolean(user.is_active),
    interests: serializeInterests(user.interests),
    birthday: user.birthday,
    buildings: user.buildings,
    hasMobileApp: user.downloaded_app,
  };
};

export const serializeUsers = users => {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      avatar: user.avatar,
      created: user.created,
      buildingIds: user.buildingIds,
      companyId: user.company_id,
      isActive: Boolean(user.is_active),
      birthday: user.birthday,
      buildings: user.buildings,
      interests: serializeInterests(user.interests),
      hasMobileApp: user.downloaded_app,
    };
  });
};

export const serializeUsersPagination = response => {
  return {
    users: serializeUsers(response.data),
    currentPage: response.current_page,
    total: response.total,
    lastPage: response.last_page,
  };
};

export const serializCustomFields = response => {
  return response.map(field => {
    return {
      id: field.id,
      name: field.name,
      type: field.type,
      isFilterable: Boolean(field.is_filterable),
      isPrivate: Boolean(field.is_private),
      isMandatory: Boolean(field.is_mandatory),
      weight: field.weight,
      options: field.options.map(option => {
        return {
          id: option.id,
          name: option.name,
        };
      }),
    };
  });
};

export const serializeUserFilesUpload = attachments => {
  return {
    user_id: attachments.userId,
    building_id: attachments.buildingId,
    user_files: attachments.attachments,
  };
};

export const serializeUserAttachment = attachment => {
  return {
    id: attachment.id,
    userId: attachment.user_id,
    buildingId: attachment.building_id,
    fileId: attachment.file_id,
    name: attachment.name,
  };
};

export const serializeUserAttachments = attachments => {
  return attachments ? attachments.map(serializeUserAttachment) : [];
};

export const serializeCustomFieldAnswers = answers => {
  return answers
    ? answers.map(answerItem => {
        return {
          id: answerItem.id,
          deletedAt: answerItem.deleted_at,
          buildingId: answerItem.building_id,
          name: answerItem.name,
          type: answerItem.type,
          isFilterable: answerItem.is_filterable,
          isPrivate: answerItem.is_private,
          isMandatory: answerItem.is_mandatory,
          weight: answerItem.weight,

          answer: {
            id: answerItem.answer.id,
            userId: answerItem.answer.user_id,
            customFieldId: answerItem.answer.custom_field_id,

            value: Array.isArray(answerItem.answer.value)
              ? answerItem.answer.value.map(answerValue => {
                  return {
                    id: answerValue.id,
                    customFieldId: answerValue.custom_field_id,
                    name: answerValue.name,
                  };
                })
              : answerItem.answer.value,
          },
        };
      })
    : [];
};

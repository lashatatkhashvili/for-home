export const serializeMessage = async data => {
  const {
    id,
    createdAt,
    roomId,
    parts: [text, attachment],
    sender,
  } = data;

  const message = {
    id: id,
    roomId: Number(roomId),
    user: {
      id: Number(sender.id),
      name: sender.name,
    },
    text: text.payload.content,
    attachment: null,
    createdAt: createdAt,
  };
  if (attachment && attachment.partType === 'attachment') {
    const { payload } = attachment;
    const freshUrl = await payload.url();
    message.attachment = {
      name: payload.name,
      type: payload.type,
      url: freshUrl,
    };
  }

  return message;
};

export const serializeChatRoom = data => {
  return {
    id: Number(data.id),
    userName: data.name,
    userId: Number(data.customData.tenant_id),
    userAvatar: data.customData.avatar_url,
    unreadCount: Number(data.unreadCount),
    lastMessageAt: data.lastMessageAt,
    buildingId: Number(data.customData.building_id),
  };
};

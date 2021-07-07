export const serializeCreateUpsale = data => {
  return {
    title: data.title,
    description: data.description,
    buttonText: data.buttonText,
    type: data.type,
    data: data.data,
    image: data.image.file,
  };
};

export const serializeUpdateUpsale = data => {
  return {
    title: data.title,
    description: data.description,
    buttonText: data.buttonText,
    type: data.type,
    data: data.data,
    image: data.image.file,
  };
};

export const serializeUpsale = data => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    buttonText: data.button_text,
    type: data.type,
    data: data.data,
    fileId: data.file_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};

export const serializeUpsales = upsales => {
  return upsales.map(serializeUpsale);
};

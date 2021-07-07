
export const serializeGallery = gallery => {
  return {
    id : gallery.id,
    name : gallery.name,
    images : gallery.images,
    tags : gallery.tags,
  };
};



const serializeTags = tag => {
  return {
    id : tag.id,
  };
};

export const serializeGalleryFilesUpload = gallery => {
  return {
    name : gallery.name,
    image : gallery.images[0].file,
    tags : gallery.tags.map(tag => serializeTags(tag)),
    caption : gallery.name
  };
};

export const serializeGalleryUpdate = (gallery , current) => {
  return {
    id : current.id,
    name : gallery.name,
    caption : gallery.name,
    tags : gallery.tags.map(tag => serializeTags(tag)),
  };
};

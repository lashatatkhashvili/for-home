import { serializeTemplate } from './Template.serializer';

export const serializeAnnoucement = annoucement => {
  return {
    id: annoucement.id,
    title : annoucement.title,
    description : annoucement.description,
    image : annoucement.image,
    data : annoucement.data,
    type : annoucement.type
  };
};

export const selializeAnnoucements = res => {
    return {
      annoucements : res.data && res.data.length > 0 && res.data.map(i => serializeAnnoucement(i)),
      total : res.total,
      current_page : res.current_page
    }
};


const serializeFiles = image => {
  return image.file;
};

export const serializeAnnoucementFilesUpload = annoucement => {
  return {
    title : annoucement.title,
    type : annoucement.type,
    description : annoucement.description,
    data : annoucement.data,
    image : serializeFiles(annoucement.image),
  };
};

const serializeUpdateFiles = image => {
  return image.id ? image.id
   : {
    image : image.file
  }

};

export const serializeAnnoucementUpdate = annoucement => {
  return {
    title : annoucement.title,
    type : annoucement.type,
    description : annoucement.description,
    data : annoucement.data,
    image : annoucement.image.id ? annoucement.image.id :  annoucement.image.file,
  };
}

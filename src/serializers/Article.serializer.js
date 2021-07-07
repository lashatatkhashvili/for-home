import { serializeTemplate } from './Template.serializer';

export const serializeArticle = article => {
  return {
    id: article.id,
    title : article.title,
    description : article.description,
    images : article.images,
    url : article.url,
    category : article.category
  };
};

export const selializeArticles = res => {
  return {
    articles : res.data && res.data.length > 0 && res.data.map(i => serializeArticle(i)),
    total : res.total,
    current_page : res.current_page
  }
};

const serializeFiles = image => {
  return image.file;
};

export const serializeArticleFilesUpload = article => {
  return {
    title : article.title,
    url : article.url,
    description : article.description,
    categoryId : article.category,
    images : !article.images ? [] : article.images.map(image => serializeFiles(image)),
  };
};

const serializeUpdateFiles = image => {
  return image.id ? {
    id : image.id
  } : {
    image : image.file
  }
};

export const serializeArticleUpdate = article => {
  return {
    categoryId : article.category,
    title : article.title,
    url : article.url,
    description : article.description,
    images : !article.images ? [] : article.images.map(image => serializeUpdateFiles(image)),
  };
}

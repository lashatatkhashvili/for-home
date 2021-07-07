import moment from 'moment';

export const serializeTemplate = template => {
  return {
    id: template.id,
    type: template.type,
    title: template.title,
    description: template.description,
    tags: template.hashtags ? template.hashtags : [],
    images: template.images,
    published_at: template.published_at,
    expires_at: template.expires_at,
    usage_count: template.usage_count,
    category: template.category,
    locale: template.locale,
    meta: template.meta.map(item => ({ id: item.id, metaType: item.meta_key, metaValue: item.meta_value })),
    milestones : template.milestone_templates
  };
};

const serializeMilestones = milestones => {
  return !Boolean(milestones.length) ? [] : milestones.map(ms => ms.id);
}

export const selializeTemplates = res => {
  return {
    templates: res.data && res.data.length > 0 ? res.data.map(i => serializeTemplate(i)) : [],
    total: res.total,
    current_page: res.current_page,
  };
};

const serializeFiles = image => {
  return image.file;
};

export const serializeTemplateFilesUpload = template => {
  const contentTemplate = {
    type: template.type,
    title: template.title,
    description: template.description,
    hashtags: template.tags,
    categoryId: template.category,
    locale: template.locale,
    expiresAt: template.expires_at ? moment(template.expires_at).format('YYYY-MM-DD') : template.expires_at,
    images: !template.images ? [] : template.images.map(image => serializeFiles(image)),
    publishedAt: template.published_at ? moment(template.published_at).format('MM/DD/Y') : template.published_at,
    milestone_template_ids : serializeMilestones(template.milestones)
  };

  if (template.meta) contentTemplate.meta = template.meta;

  return contentTemplate;
};

const serializeUpdateFiles = image => {
  return image.id
    ? {
        id: image.id,
      }
    : {
        image: image.file,
      };
};
export const serializeTemplateUpdate = template => {
  return {
    id: template.id,
    type: template.type,
    title: template.title,
    description: template.description,
    hashtags: template.tags,
    categoryId : template.category,
    expires_at : template.expires_at,
    locale : template.locale,
    images : !template.images ? [] : template.images.map(image => serializeUpdateFiles(image)),
    publishedAt : template.published_at ? moment(template.published_at).format('MM/DD/Y') : template.published_at,
    milestone_template_ids : serializeMilestones(template.milestones)
  };
};

export const serializeAnnouncementPost = data => {
  return {
    title: data.title,
    text: data.description,
    // post_type: 2,
    private: 0,
    images: !data.images ? [] : data.images.map(image => serializeFiles(image)),
    contentTemplateId: data.contentTemplateId,
    hashtags: data.tags,
    announcement: 1,
    announcement_data: data.metaValue,
    announcement_type: data.metaType,
    building_ids: data.buildingIds,
  };
};
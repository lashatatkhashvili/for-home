export const serializeEmailTemplates = response => {
  return response
    ? response.map(template => {
        return {
          id: template.id,
          name: template.name,
          subject: template.subject,
          body: template.body,
          jsonBody: template.json_body,
          image: template.image,
          userId: template.user_id,
          templateId: template.template_id,
          buildingId: template.building_id,
          lastModified: template.created_at,
        };
      })
    : [];
};

export const serializeEmailTemplate = template => {
  return {
    id: template.id,
    name: template.name,
    subject: template.subject,
    body: template.body,
    jsonBody: template.json_body,
    image: template.image,
    userId: template.user_id,
    templateId: template.template_id,
    buildingId: template.building_id,
    lastModified: template.created_at,
  };
};

export const serializeNewEmailTemplate = data => {
  const template = {
    name: data.name,
    subject: data.subject,
    image: data.image,
    body: data.body,
    json_body: data.jsonBody,
  };

  if (data.templateId) {
    template.template_id = Number(data.templateId);
  }

  if (data.buildingId) {
    template.building_id = Number(data.buildingId);
  }

  return template;
};

export const serializeTemplateResponse = template => {
  return {
    id: template.id,
    name: template.name,
    subject: template.subject,
    body: template.body,
    jsonBody: template.json_body,
    image: template.image,
    userId: template.user_id,
    templateId: template.template_id,
    buildingId: template.building_id,
    lastModified: template.created_at,
  };
};

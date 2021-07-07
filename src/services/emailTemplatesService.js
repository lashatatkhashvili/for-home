import AppAPI from '../network/AppAPI';
import {
  serializeEmailTemplate,
  serializeEmailTemplates,
  serializeTemplateResponse,
} from '../serializers/EmailTemplates.serializer';

class emailTemplatesService {
  static createEmailTemplate = data => {
    return AppAPI.postFile(`/email-templates`, data).then(response => {
      return serializeTemplateResponse(response);
    });
  };

  static updateEmailTemplate = (templateId, data) => {
    return AppAPI.postFile(`/email-templates/${templateId}/update`, data).then(response => {
      return serializeTemplateResponse(response);
    });
  };

  static fetchEmailTemplates = params => {
    return AppAPI.get(`/email-templates`, params).then(response => {
      return serializeEmailTemplates(response);
    });
  };

  static fetchEmailTemplate = templateId => {
    return AppAPI.get(`/email-templates/${templateId}`).then(response => {
      return serializeEmailTemplate(response);
    });
  };

  static removeEmailTemplate = templateId => {
    return AppAPI.delete(`/email-templates/${templateId}`).then(response => {
      return response;
    });
  };

  static uploadTemplateFile = files => {
    return AppAPI.postFile(`/files`, files).then(response => {
      return response;
    });
  };
}

export default emailTemplatesService;

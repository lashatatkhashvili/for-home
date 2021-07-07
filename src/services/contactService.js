import AppAPI from '../network/AppAPI';
import { serializeEventContact, serializeGeneralContact } from '../serializers/Contact.serializer';

class contactService {
  static sendEventContact = formValues => {
    const params = serializeEventContact(formValues);
    return AppAPI.post('/events/email/send', params);
  };

  static sendGeneralContact = formValues => {
    const params = serializeGeneralContact(formValues);
    return AppAPI.post('/contact_us/email/send', params);
  };

}

export default contactService;

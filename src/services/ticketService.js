import AppAPI from '../network/AppAPI';
import {
  serializeProfileTickets,
  serializeTicket,
  serializeTicketCategory,
  serializeTicketComment,
  serializeTickets,
} from '../serializers/Tickets.serializer';
import NetworkManager from '../network/NetworkManager';
import { saveAs } from 'file-saver';

class ticketService {
  static getBuildingTickets = buildingId => {
    return AppAPI.get(`/tickets/${buildingId}`).then(response => {
      return response.map(serializeTicket);
    });
  };

  static getHrCompanyTickets = () => {
    return AppAPI.get(`/tickets/hr`).then(response => {
      return response.map(serializeTicket);
    });
  };

  static getTicketById = ticketId => {
    return AppAPI.get(`/ticket/${ticketId}`).then(response => {
      return serializeTicket(response);
    });
  };

  static addCommentToTicket = (ticketId, comment) => {
    return AppAPI.post(`/tickets/add_comment`, { ticket_id: ticketId, comment }).then(response => {
      return serializeTicketComment(response);
    });
  };

  static resolveTicket = ticketId => {
    return AppAPI.post(`/tickets/mark_resolved`, { ticket_id: ticketId }).then(response => {
      return response;
    });
  };

  static createTicket = formValues => {
    return AppAPI.post(`/tickets/create`, formValues).then(response => {
      return serializeTicket(response[0]);
    });
  };

  static fetchTicketCategoriesByBuildingId = buildingId => {
    return AppAPI.get(`/ticket/categories/${buildingId}`).then(response => {
      return response.map(serializeTicketCategory);
    });
  };

  static createTicketCategories = formValues => {
    return AppAPI.post(`/tickets/add_category`, formValues).then(response => {
      return response.map(serializeTicketCategory);
    });
  };

  static deleteTicketCategories = categoryIds => {
    return AppAPI.post(`/tickets/remove_category`, { category_ids: categoryIds });
  };

  static updateTicketCategory = (ticketId, categoryId) => {
    return AppAPI.post(`/tickets/update`, { ticket_id: ticketId, category_id: categoryId });
  };

  static downloadTicketFile = (fileId, saveAsName) => {
    // return AppAPI.get(`/files/${fileId}`);
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      saveAs(new Blob([blob]), saveAsName);
      return blob;
    });
  };

  static downloadTicketFileImage = (fileId, saveAsName) => {
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      let blobObject = new Blob([blob]);
      return URL.createObjectURL(blobObject);
    });
  };

  static getUserTickets = (buildingId, userId) => {
    return AppAPI.get(`/ticket/user-tickets/${buildingId}/${userId}`).then(response => {
      return serializeProfileTickets(response);
    });
  };
}

export default ticketService;

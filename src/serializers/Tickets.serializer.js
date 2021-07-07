export const serializeTicket = ticket => {
  return {
    id: ticket.id,
    issue: ticket.issue,
    location: ticket.location,
    buildingId: ticket.building_id,
    category: ticket.category && serializeTicketCategory(ticket.category),
    categoryId: ticket.category_id,
    statusId: ticket.ticket_status_id,
    created: ticket.created_at,
    resolved: ticket.resolved_at,
    reopened: ticket.reopened_at,
    tenant: serializeTicketTenant(ticket.tenant),
    comments: ticket.comments.map(serializeTicketComment),
    files: ticket.ticket_files.map(serializeTicketFiles),
  };
};

export const serializeTicketTenant = tenant => {
  return {
    id: tenant.id,
    name: tenant.name,
    email: tenant.email,
    avatar: tenant.avatar,
  };
};

export const serializeTicketComment = comment => {
  return {
    id: comment.id,
    created: comment.created_at,
    comment: comment.comment,
  };
};

export const serializeTicketFiles = ticketFile => {
  return {
    id: ticketFile.id,
    createdAt: ticketFile.created_at,
    updatedAt: ticketFile.updated_at,
    ticketId: ticketFile.ticket_id,
    fileId: ticketFile.file_id,
    name: ticketFile.name,
  };
};

export const serializeTicketCreateRequest = (buildingId, formValues) => {
  return {
    category_id: formValues.categoryId,
    building_id: buildingId,
    location: formValues.location,
    issue: formValues.description,
    tenant_id: formValues.reportedByMe ? formValues.myUserId : formValues.reportedByUserId,
  };
};

export const serializeTicketCategory = response => {
  return {
    id: response.id,
    name: response.name,
    buildingId: response.building_id,
  };
};

export const serializeCreateTicketCategoriesRequest = (buildingId, categories) => {
  return {
    building_id: buildingId,
    categories: categories,
  };
};

export const serializeProfileTickets = tickets => {
  return tickets
    ? tickets.map(ticket => ({
        id: ticket.id,
        issue: ticket.issue,
        location: ticket.location,
        buildingId: ticket.building_id,
        category: ticket.category && serializeTicketCategory(ticket.category),
        categoryId: ticket.category_id,
        statusId: ticket.ticket_status_id,
        created: ticket.created_at,
        resolved: ticket.resolved_at,
        reopened: ticket.reopened_at,
        comments: ticket.comments ? ticket.comments.map(serializeTicketComment) : [],
        files: ticket.ticket_files.map(serializeTicketFiles),
      }))
    : [];
};

export const serializeBuildingRequest = response => {
  return {
    id: response.id,
    buildingId: response.building_id,
    category: response.category,
    categoryId: response.category_id,
    created: response.created_at,
    issue: response.description,
    reopened: response.reopened_at,
    resolved: response.resolved_at,
    statusId: response.status,
    tenant: response.tenant,
    userId: response.user_id,
    comments: serialiazeCurrentRequestComment(response.comments),
    files: response.request_files.map(serializeRequestFiles),
  };
};

export const serializeBuildingRequests = requests => {
  return requests.map(request => serializeBuildingRequest(request));
};

export const serializeNewRequest = formValues => {
  return {
    category_id: formValues.categoryId,
    building_id: formValues.buildingId,
    description: formValues.description,
  };
};

export const serializeRequestComment = comment => {
  return {
    id: comment.id,
    comment: comment.comment,
    createdAt: comment.created_at,
    userId: comment.user_id,
  };
};

export const serializeRequestFiles = requestFile => {
  return {
    id: requestFile.id,
    createdAt: requestFile.created_at,
    updatedAt: requestFile.updated_at,
    requestId: requestFile.request_id,
    fileId: requestFile.file_id,
    name: requestFile.name,
  };
};

export const serialiazeCurrentRequestComment = comments => {
  return comments
    ? comments.map(comment => ({
        id: comment.id,
        comment: comment.comment,
        createdAt: comment.created_at,
        userId: comment.user_id,
      }))
    : [];
};

export const serializeCreateRequestCategoriesRequest = (buildingId, categories) => {
  return {
    building_id: buildingId,
    categories: categories,
  };
};

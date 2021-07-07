import moment from 'moment';
// import { serializeUsers } from './Users.serializer';

export const serializeGroup = group => {
  let createdAt = null;
  if (group.created_at) {
    let momentDate = moment(group.created_at);
    createdAt = momentDate.format('DD/MM/YYYY');
  }
  return {
    id: group.id,
    buildingId: group.building_id,
    userId: group.user_id,
    category: group.group_category_id,
    name: group.name,
    description: group.description,
    image: group.file_id ? process.env.REACT_APP_API_URL + '/files/' + group.file_id : null,
    privacy: group.privacy,
    members: group.members,
    membersCount: group.members_count,
    postsCount: group.posts_count,
    categoryData: group.category ? group.category : null,
    createdAt,
  };
};

export const serializeGroups = groups => {
  return {
    groups: groups.data ? groups.data.map(group => serializeGroup(group)) : [],
    currentPage: groups.current_page,
    total: groups.total,
  };
};

export const serializeProfileGroups = groups => {
  return !groups
    ? []
    : groups.map(group => ({
        id: group.id,
        groupCategoryId: group.group_category_id,
        name: group.name,
        description: group.description,
        fileId: group.file_id,
        privacy: group.privacy,
        buildingId: group.building_id,
        deletedAt: group.deleted_at,
        membersCount: group.members_count,
        category: group.category,
      }));
};

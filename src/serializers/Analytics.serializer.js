export const serializeAnalyticsRequest = usegeFilters => {
  return {
    building_ids: usegeFilters.selectedBuildingIds,
    interval: usegeFilters.intervalValue,
    start_date: usegeFilters.startDate,
    end_date: usegeFilters.endDate,
  };
};

export const serializeAnalyticsResponse = response => {
  return {
    rooms: response.rooms,
    posts: response.posts,
    events: response.events,
    invitations: response.invitations,
  };
};

export const serializeTicketAnalyticsResponse = response => {
  return {
    resolved: response.resolved,
    open: response.open,
    ltTwoHrs: response.lt_two_hrs,
    ltOneDay: response.lt_one_day,
    ltOneWeek: response.lt_one_week,
    ltOneMonth: response.lt_one_month,
    ltOneYear: response.lt_one_year,
  };
};

export const serializeTicketCategoryAnalyticsRequest = usegeFilters => {
  return {
    building_id: usegeFilters.selectedBuildingIds[0],
    start_date: usegeFilters.startDate,
    end_date: usegeFilters.endDate,
  };
};

export const serializeTicketCategoryAnalyticsResponse = response => {
  return response.map(item => {
    return {
      name: item.name,
      count: item.count,
    };
  });
};

export const serializeRequestAnalyticsResponse = response => {
  return {
    resolved: response.resolved,
    open: response.open,
    ltTwoHrs: response.lt_two_hrs,
    ltOneDay: response.lt_one_day,
    ltOneWeek: response.lt_one_week,
    ltOneMonth: response.lt_one_month,
    ltOneYear: response.lt_one_year,
  };
};

export const serializeRequestCategoryAnalyticsRequest = usegeFilters => {
  return {
    building_id: usegeFilters.selectedBuildingIds[0],
    start_date: usegeFilters.startDate,
    end_date: usegeFilters.endDate,
  };
};

export const serializeRequestCategoryAnalyticsResponse = response => {
  return response.map(item => {
    return {
      name: item.name,
      count: item.count,
    };
  });
};

import AppAPI from '../network/AppAPI';
import {
  serializeAnalyticsRequest,
  serializeAnalyticsResponse,
  serializeRequestAnalyticsResponse,
  serializeRequestCategoryAnalyticsRequest,
  serializeRequestCategoryAnalyticsResponse,
  serializeTicketAnalyticsResponse,
  serializeTicketCategoryAnalyticsRequest,
  serializeTicketCategoryAnalyticsResponse,
} from '../serializers/Analytics.serializer';

class anatyticsService {
  static getAnalyticsUsage = usegeFilters => {
    const params = serializeAnalyticsRequest(usegeFilters);
    return AppAPI.post('/usage/notes', params).then(serializeAnalyticsResponse);
  };

  static getTicketAnalyticsUsage = usegeFilters => {
    const params = serializeAnalyticsRequest(usegeFilters);
    return AppAPI.post('/usage/notes/tickets/hr', params).then(serializeTicketAnalyticsResponse);
  };

  static getTicketCategoryAnalyticsUsage = usegeFilters => {
    const params = serializeTicketCategoryAnalyticsRequest(usegeFilters);
    return AppAPI.post('/usage/notes/ticket_categories/hr', params).then(serializeTicketCategoryAnalyticsResponse);
  };

  static getRequestAnalyticsUsage = usegeFilters => {
    const params = serializeAnalyticsRequest(usegeFilters);
    return AppAPI.post(`/usage/analytics/requests/hr`, params).then(serializeRequestAnalyticsResponse);
  };

  static getRequestCategoryAnalyticsUsage = usegeFilters => {
    const params = serializeRequestCategoryAnalyticsRequest(usegeFilters);
    return AppAPI.post(`/usage/analytics/request_categories/hr`, params).then(
      serializeRequestCategoryAnalyticsResponse
    );
  };
}

export default anatyticsService;

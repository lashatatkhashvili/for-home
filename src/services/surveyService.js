import AppAPI from '../network/AppAPI';
import { serializeSurveyResponse } from '../serializers/Surveys.serializer';

class SurveyService {
  static fetchSurveys = (buildingId, page) => {
    return AppAPI.get(`/survey/templates`, {
      buildingId,
      page,
    }).then(response => {
      return {
        surveys: response.data.map(serializeSurveyResponse),
        total: response.total,
        currentPage: response.current_page,
      };
    });
  };

  static getSurvey = surveyId => {
    return AppAPI.get(`/survey/${surveyId}`).then(response => {
      return serializeSurveyResponse(response);
    });
  };

  static createSurvey = survey => {
    return AppAPI.post(`/survey`, survey).then(response => {
      return serializeSurveyResponse(response);
    });
  };

  static updateSurvey = (survey, id) => {
    return AppAPI.post(`/survey/${id}`, survey).then(response => {
      return serializeSurveyResponse(response);
    });
  };

  static deleteSurvey = id => {
    return AppAPI.delete(`/survey/${id}`);
  };
  static expireSurvey = id => {
    return AppAPI.post(`/survey/${id}/expire`);
  };
}

export default SurveyService;

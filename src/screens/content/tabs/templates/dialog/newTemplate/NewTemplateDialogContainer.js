import { connect } from 'react-redux';
import NewPostDialogForm from './NewTemplateDialogForm';
import {
  createTemplateAction,
  udateTemplateAction,
  getTemplatesCategoriesAction,
  getMilestonesAction
} from '../../../../../../reducers/template/template.actions';
import { selectIsFetchingCategories , selectTemplateCategories , selectMilestones , selectIsFetchingMilestones } from '../../../../../../reducers/template/template.selectors';


const mapStateToProps = state => {
  return {
    isFetchingCategories : selectIsFetchingCategories(state),
    categories : selectTemplateCategories(state),
    milestones : selectMilestones(state),
    isFetchingMilestones : selectIsFetchingMilestones(state),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTemplateAction : data => dispatch(createTemplateAction(data)),
    udateTemplateAction : (data, id) => dispatch(udateTemplateAction(data ,id)),
    getTemplatesCategoriesAction : () => dispatch(getTemplatesCategoriesAction()),
    getMilestonesAction : () => dispatch(getMilestonesAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostDialogForm);

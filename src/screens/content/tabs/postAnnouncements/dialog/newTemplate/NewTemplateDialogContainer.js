import { connect } from 'react-redux';
import NewPostDialogForm from './NewTemplateDialogForm';
import {
  createTemplateAction,
  udateTemplateAction,
  getTemplatesCategoriesAction
} from '../../../../../../reducers/template/template.actions';
import { selectIsFetchingCategories , selectTemplateCategories } from '../../../../../../reducers/template/template.selectors';


const mapStateToProps = state => {
  return {
    isFetchingCategories : selectIsFetchingCategories(state),
    categories : selectTemplateCategories(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTemplateAction : data => dispatch(createTemplateAction(data)),
    udateTemplateAction : (data, id) => dispatch(udateTemplateAction(data ,id)),
    getTemplatesCategoriesAction : () => dispatch(getTemplatesCategoriesAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostDialogForm);

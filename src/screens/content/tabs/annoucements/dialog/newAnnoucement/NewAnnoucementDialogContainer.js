import { connect } from 'react-redux';
import NewPostDialogForm from './NewAnnoucementDialogForm';
import {
  createAnnoucementAction,
  updateAnnoucementAction
} from '../../../../../../reducers/annoucement/annoucement.actions';
import { selectIsFetchingCategories , selectTemplateCategories } from '../../../../../../reducers/template/template.selectors';


const mapStateToProps = state => {
  return {
    isFetchingCategories : selectIsFetchingCategories(state),
    categories : selectTemplateCategories(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createAnnoucement : data => dispatch(createAnnoucementAction(data)),
    updateAnnoucement : (data, id) => dispatch(updateAnnoucementAction(data ,id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostDialogForm);

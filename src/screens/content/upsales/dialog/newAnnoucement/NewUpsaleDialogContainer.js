import { connect } from 'react-redux';
import NewPostDialogForm from './NewUpsaleDialogForm';
import {
  createAnnoucementAction,
  updateAnnoucementAction,
} from '../../../../../reducers/annoucement/annoucement.actions';
import {
  selectIsFetchingCategories,
  selectTemplateCategories,
} from '../../../../../reducers/template/template.selectors';
import { createUpsale, updateUpsale } from '../../../../../reducers/upsales/upsales.actions';

const mapStateToProps = state => {
  return {
    // remove later
    isFetchingCategories: selectIsFetchingCategories(state),
    categories: selectTemplateCategories(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createUpsale: data => dispatch(createUpsale(data)),
    updateUpsale: (bannerId, data) => dispatch(updateUpsale(bannerId, data)),

    // remove later
    createAnnoucement: data => dispatch(createAnnoucementAction(data)),
    updateAnnoucement: (data, id) => dispatch(updateAnnoucementAction(data, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostDialogForm);

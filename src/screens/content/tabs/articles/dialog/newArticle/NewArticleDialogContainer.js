import { connect } from 'react-redux';
import NewPostDialogForm from './NewArticleDialogForm';
import {
  createArticleteAction,
  updateArticleAction
} from '../../../../../../reducers/article/article.actions';
import { selectIsFetchingCategories , selectTemplateCategories } from '../../../../../../reducers/template/template.selectors';
import { getTemplatesCategoriesAction } from '../../../../../../reducers/template/template.actions';


const mapStateToProps = state => {
  return {
    isFetchingCategories : selectIsFetchingCategories(state),
    categories : selectTemplateCategories(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createArticle : data => dispatch(createArticleteAction(data)),
    getTemplatesCategoriesAction : () => dispatch(getTemplatesCategoriesAction()),
    updateArticle : (data, id) => dispatch(updateArticleAction(data ,id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostDialogForm);

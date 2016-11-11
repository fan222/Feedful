import { connect } from 'react-redux';
import CollectionIndex from './collection_index';
import {createArticle, deleteArticle}
        from '../../actions/articles_actions';
        
const mapStateToProps = (state, { params, location }) => ({
  feeds: state.feeds,
  collection: state.collections[params.colId],
  articles: state.articles
});


const mapDispatchToProps = (dispatch) => ({
  createArticle: article => dispatch(createArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionIndex);

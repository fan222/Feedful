import {connect} from 'react-redux';
import Favorites from './favorites';
import {createArticle, deleteArticle}
        from '../../actions/articles_actions';

const mapStateToProps = ({articles, feeds}) => ({
  articles: articles,
  feeds: feeds
});

const mapDispatchToProps = dispatch => ({
  createArticle: article => dispatch(createArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

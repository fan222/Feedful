import { connect } from 'react-redux';
import FeedDetail from './feeddetail';
import {createArticle, deleteArticle}
        from '../../actions/articles_actions';

const mapStateToProps = (state, { params, location }) => ({
  feed: state.feeds[params.feedId],
  articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
  createArticle: article => dispatch(createArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedDetail);

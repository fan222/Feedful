import { connect } from 'react-redux';
import FeedsNow from './feeds_now';
import {createArticle, deleteArticle}
        from '../../actions/articles_actions';

const mapStateToProps = (state) => ({
  feeds: state.feeds,
  articles: state.articles
});


const mapDispatchToProps = (dispatch) => ({
  createArticle: article => dispatch(createArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsNow);

import { RECEIVE_ALL_ARTICLES,
          RECEIVE_ARTICLE, RECEIVE_DELETED_ARTICLE
        } from '../actions/articles_actions';
import merge from 'lodash/merge';

const _defaultArticles = {
  0: {
    id: 0,
    title: "",
    user_id: 0,
    feed_id: 0,
    author: "",
    url: "",
    entry_id: "",
    published: "",
    image: "",
    summary: "",
    content: ""
  }
};

const ArticlesReducer = (state = _defaultArticles, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      return merge({}, action.articles);
    case RECEIVE_ARTICLE:
      return merge({}, state, {[action.article.id]: action.article});
    case RECEIVE_DELETED_ARTICLE:
      newState = merge({}, state);
      delete newState[action.article.id];
      return newState;
    default:
      return state;
  }
};

export default ArticlesReducer;

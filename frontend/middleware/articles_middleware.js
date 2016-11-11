import {  FETCH_ALL_ARTICLES, receiveAllArticles, CREATE_ARTICLE,
          DELETE_ARTILCE, receiveArticle,
          receiveDeletedArticle}
          from '../actions/articles_actions';
import {  fetchAllArticles, createArticle,
          deleteArtcile} from '../util/articles_api_util';


export default ({dispatch}) => next => action => {
  const fetchAllSuccess = articles => dispatch(receiveAllArticles(articles));
  const receiveSuccess = article => dispatch(receiveArticle(article));
  const deleteSuccess = article => dispatch(receiveDeletedArticle(article));
  switch (action.type) {
    case  FETCH_ALL_ARTICLES:
      fetchAllArticles(fetchAllSuccess);
      return next(action);
    case CREATE_ARTICLE:
      createArticle(action.article, receiveSuccess);
      return next(action);
    case DELETE_ARTILCE:
      deleteArtcile(action.id, deleteSuccess);
      return next(action);
    default:
      return next(action);
  }
};

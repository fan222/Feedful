export const FETCH_ALL_ARTICLES = "FETCH_ALL_ARTICLES";
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const DELETE_ARTILCE = "DELETE_ARTILCE";
export const RECEIVE_DELETED_ARTICLE = "RECEIVE_DELETED_ARTICLE";


export const fetchAllArticles = () => ({
  type: FETCH_ALL_ARTICLES
});

export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles: articles
});

export const fetchArticle = () => ({
  type: FETCH_ARTICLE
});

export const receiveArticle = (article) => ({
  type: RECEIVE_ARTICLE,
  article: article
});

export const createArticle = (article) => ({
  type: CREATE_ARTICLE,
  article: article
});

export const deleteArticle = (id) => ({
  type: DELETE_ARTILCE,
  id: id
});

export const receiveDeletedArticle = (article) => ({
  type: RECEIVE_DELETED_ARTICLE,
  article: article
});

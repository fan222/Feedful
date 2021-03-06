import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import MiddlePageContainer from './middlepage/middlepage_container';
import CategoriesItemContainer from './middlepage/categories_item_container';
import SplashContainer from './splash/splash_container';
import FeedDetailContainer from './middlepage/feeddetail_container';
import CollectionIndexContainer from
        './collection_index/collection_index_container';
import FeedsNowContainer from './feeds_now/feeds_now_container';
import EditContainer from './edit/edit_container';
import FavoritesContainer from './favorites/favorites_container';

import { fetchAllCollections } from '../actions/collections_actions';
import { fetchAllCategories } from '../actions/categories_actions';
import { fetchAllFeeds } from '../actions/feeds_actions';
import { fetchAllArticles } from '../actions/articles_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    } else {
      if (Object.keys(store.getState().collections).length === 1) {
        store.dispatch(fetchAllCollections());
      }
      if (Object.keys(store.getState().categories).length === 1) {
        store.dispatch(fetchAllCategories());
      }
      if (Object.keys(store.getState().feeds).length === 1) {
        store.dispatch(fetchAllFeeds());
      }
      if (Object.keys(store.getState().articles).length === 1) {
        store.dispatch((fetchAllArticles()));
      }
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={SplashContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="home" component={MiddlePageContainer} onEnter={_ensureLoggedIn}>
            <IndexRoute component={FeedsNowContainer} />
            <Route path="categories/:catId" component={CategoriesItemContainer} />
            <Route path="feeds/:feedId" component={FeedDetailContainer} />
            <Route path="collections/:colId" component={CollectionIndexContainer} />
            <Route path="edit" component={EditContainer} />
            <Route path="favorites" component={FavoritesContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import MiddlePageContainer from './middlepage/middlepage_container';
import CategoriesItemContainer from './middlepage/categories_item_container';
import SplashContainer from './splash/splash_container';
import FeedDetailContainer from './middlepage/feeddetail_container';
import TodayIndexContainer from './today_index/today_index_container';
import CollectionIndexContainer from './today_index/collection_index_container';

import { fetchAllCollections } from '../actions/collections_actions';
import { fetchAllCategories } from '../actions/categories_actions';
import { fetchAllFeeds } from '../actions/feeds_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    } else {
      if (Object.keys(store.getState().feeds).length === 1) {
        store.dispatch(fetchAllFeeds());
      }
      if (Object.keys(store.getState().collections).length === 1) {
        store.dispatch(fetchAllCollections());
      }
      if (Object.keys(store.getState().categories).length === 1) {
        store.dispatch(fetchAllCategories());
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
            <Route path="categories/:catId" component={CategoriesItemContainer} />
            <Route path="feeds/:feedId" component={FeedDetailContainer} />
            <Route path="collections/:colId" component={CollectionIndexContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

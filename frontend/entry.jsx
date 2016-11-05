import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';
import configureStore from './store/store';
import { fetchAllFeeds, fetchFeed } from './actions/feeds_actions';


import { fetchAllCollections } from './util/categories_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  Modal.setAppElement(document.body);
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.store = store;
  window.fetchAllFeeds  = fetchAllFeeds;
  window.fetchFeed = fetchFeed;
  window.fetchAllCollections = fetchAllCollections;
});

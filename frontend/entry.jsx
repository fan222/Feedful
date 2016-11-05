import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';
import configureStore from './store/store';
import { fetchAllCollections } from './actions/collections_actions';
import { fetchAllCategories } from './actions/categories_actions';

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
  window.fetchAllCollections = fetchAllCollections;
  window.fetchAllCategories = fetchAllCategories;
});

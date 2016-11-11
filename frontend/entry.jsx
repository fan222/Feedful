import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';
import configureStore from './store/store';
import {createCollection,updateCollection,deleteCollection}
        from './actions/collections_actions';


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
  window.createCollection = createCollection;
  window.updateCollection = updateCollection;
  window.deleteCollection = deleteCollection;
});

import { RECEIVE_ALL_COLLECTIONS,
          RECEIVE_COLLECTION, RECEIVE_DELETED_COLLECTION,
          RECEIVE_UPDATED_COLLECTION
        } from '../actions/collections_actions';
import merge from 'lodash/merge';

const _defaultCollections = {
  0: {
    id: 0,
    name: "",
    feeds_ids: []
  }
};

const CollectionsReducer = (state = _defaultCollections, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return merge({}, action.collections);
    case RECEIVE_COLLECTION:
      return merge({}, state, {[action.collection.id]: action.collection });
    case RECEIVE_UPDATED_COLLECTION:
      newState = merge({},state);
      newState[action.collection.id] = action.collection;
      return newState;
    case RECEIVE_DELETED_COLLECTION:
      newState = merge({}, state);
      delete newState[action.collection.id];
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;

import { RECEIVE_ALL_COLLECTIONS } from '../actions/collections_actions';
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
  switch (action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return merge({}, action.collections);
    default:
      return state;
  }
};

export default CollectionsReducer;

import {  FETCH_ALL_COLLECTIONS, receiveAllCollections, CREATE_COLLECTION,
          UPDATE_COLLECTION, DELETE_COLLECTION, receiveCollection,
          receiveDeletedCollection, receiveUpdatedCollection}
          from '../actions/collections_actions';
import {  fetchAllCollections, createCollection, updateCollection,
          deleteCollection} from '../util/collections_api_util';


export default ({dispatch}) => next => action => {
  const fetchAllSuccess = collections => dispatch(receiveAllCollections(collections));
  const receiveSuccess = collection => dispatch(receiveCollection(collection));
  const deleteSuccess = collection => dispatch(receiveDeletedCollection(collection));
  const updateSuccess = collection => dispatch(receiveUpdatedCollection(collection));
  switch (action.type) {
    case FETCH_ALL_COLLECTIONS:
      fetchAllCollections(fetchAllSuccess);
      return next(action);
    case CREATE_COLLECTION:
      createCollection(action.collection, receiveSuccess);
      return next(action);
    case UPDATE_COLLECTION:
      updateCollection(action.collection, updateSuccess);
      return next(action);
    case DELETE_COLLECTION:
      deleteCollection(action.collection, deleteSuccess);
      return next(action);
    default:
      return next(action);
  }
};

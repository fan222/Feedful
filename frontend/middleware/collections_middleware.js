import { FETCH_ALL_COLLECTIONS, receiveAllCollections }
from '../actions/collections_actions';
import { fetchAllCollections } from '../util/collections_api_util';


export default ({dispatch}) => next => action => {
  const fetchAllSuccess = collections => dispatch(receiveAllCollections(collections));
  switch (action.type) {
    case FETCH_ALL_COLLECTIONS:
      fetchAllCollections(fetchAllSuccess);
      return next(action);
    default:
      return next(action);
  }
};

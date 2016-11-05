import {FETCH_ALL_CATEGORIES, receiveAllCategories}
from '../actions/categories_actions';
import { fetchAllCategories } from '../util/categories_api_util';

export default ({dispatch}) => next => action => {
  const fetchAllSuccess = categories => dispatch(receiveAllCategories(categories));
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
    fetchAllCategories(fetchAllSuccess);
      return next(action);
    default:
    return next(action);
  }
};

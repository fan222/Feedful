import { RECEIVE_ALL_CATEGORIES } from '../actions/categories_actions';
import merge from 'lodash/merge';

const _defaultCategories = {
  0: {
    id: 0,
    name: "",
    feeds_ids: []
  }
};


const CategoriesReducer = (state = _defaultCategories, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, action.categories);
    default:
      return state;
  }
};

export default CategoriesReducer;

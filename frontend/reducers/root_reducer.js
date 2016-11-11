import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import FeedsReducer from './feeds_reducer';
import CollectionsReducer from './collections_reducer';
import CategoriesReducer from './categories_reducer';
import ArticlesReducer from './articles_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedsReducer,
  collections: CollectionsReducer,
  categories: CategoriesReducer,
  articles: ArticlesReducer
});

export default RootReducer;

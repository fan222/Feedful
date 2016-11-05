import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import FeedsReducer from './feeds_reducer';
import CollectionsReducer from './collections_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedsReducer,
  collections: CollectionsReducer
});

export default RootReducer;

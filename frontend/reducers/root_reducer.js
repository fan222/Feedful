import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import FeedsReducer from './feeds_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedsReducer
});

export default RootReducer;

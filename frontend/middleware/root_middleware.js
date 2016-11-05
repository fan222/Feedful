import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import FeedsMiddleware from './feeds_middleware';
import CollectionsMiddleware from './collections_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedsMiddleware,
  CollectionsMiddleware
);

export default RootMiddleware;

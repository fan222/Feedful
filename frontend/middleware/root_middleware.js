import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import FeedsMiddleware from './feeds_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedsMiddleware
);

export default RootMiddleware;

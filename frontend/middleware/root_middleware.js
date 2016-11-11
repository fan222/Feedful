import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import FeedsMiddleware from './feeds_middleware';
import CollectionsMiddleware from './collections_middleware';
import CategoriesMiddleware from './categories_middleware';
import ArticlesMiddleware from './articles_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedsMiddleware,
  CollectionsMiddleware,
  CategoriesMiddleware,
  ArticlesMiddleware
);

export default RootMiddleware;

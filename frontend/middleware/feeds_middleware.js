import { receiveAllFeeds, receiveFeed, FETCH_ALL_FEEDS, FETCH_FEED  }
from '../actions/feeds_actions';

import { fetchAllFeeds, fetchFeed} from '../util/feeds_api_util';


export default ({dispatch}) => next => action => {
  const fetchAllSuccess = feeds => dispatch(receiveAllFeeds(feeds));
  const fetchOneSuccess = feed => dispatch(receiveFeed(feed));

  switch (action.type) {
    case FETCH_ALL_FEEDS:
      fetchAllFeeds(fetchAllSuccess);
      return next(action);
    case FETCH_FEED:
      fetchFeed(action.id, fetchOneSuccess);
      return next(action);
    default:
      return next(action);
  }
};

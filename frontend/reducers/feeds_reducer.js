import { RECEIVE_ALL_FEEDS, RECEIVE_FEED }
from '../actions/feeds_actions';
import merge from 'lodash/merge';

const _defaultFeeds = {
  0: {
    id: 0,
    name: "",
    url: "",
    description: "",
    articles: {
      0: {
        id: 0,
        title: "",
        summary: "",
        author: "",
        image: "",
        url: "",
        content: ""
      }
    }
  }
};

const FeedsReducer = (state = _defaultFeeds, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_FEEDS:
        return merge({}, action.feeds);
      case RECEIVE_FEED:
        return merge({}, state, {
          [action.feed.id]: action.feed
        });
      default:
        return state;
    }
};

export default FeedsReducer;

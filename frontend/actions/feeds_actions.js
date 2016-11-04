export const FETCH_ALL_FEEDS = "FETCH_ALL_FEEDS";
export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const FETCH_FEED = "FETCH_FEED";
export const RECEIVE_FEED = "RECEIVE_FEED";


export const fetchAllFeeds = () => ({
  type: FETCH_ALL_FEEDS
});

export const receiveAllFeeds = (feeds) => ({
  type: RECEIVE_ALL_FEEDS,
  feeds: feeds
});

export const fetchFeed = (id) => ({
  type: FETCH_FEED,
  id: id
});

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed: feed
});

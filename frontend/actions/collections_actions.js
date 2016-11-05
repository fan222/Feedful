export const FETCH_ALL_COLLECTIONS = "FETCH_ALL_COLLECTIONS";
export const RECEIVE_ALL_COLLECTIONS = "RECEIVE_ALL_COLLECTIONS";

export const fetchAllCollections = () => ({
  type: FETCH_ALL_COLLECTIONS
});

export const receiveAllCollections = (collections) => ({
  type: RECEIVE_ALL_COLLECTIONS,
  collections
});

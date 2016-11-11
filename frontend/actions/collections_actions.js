export const FETCH_ALL_COLLECTIONS = "FETCH_ALL_COLLECTIONS";
export const RECEIVE_ALL_COLLECTIONS = "RECEIVE_ALL_COLLECTIONS";
export const FETCH_COLLECTION = "FETCH_COLLECTION";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const CREATE_COLLECTION = "CREATE_COLLECTION";
export const UPDATE_COLLECTION = "UPDATE_COLLECTION";
export const DELETE_COLLECTION = "DELETE_COLLECTION";
export const RECEIVE_DELETED_COLLECTION = "RECEIVE_DELETED_COLLECTION";
export const RECEIVE_UPDATED_COLLECTION = "RECEIVE_UPDATED_COLLECTION";


export const fetchAllCollections = () => ({
  type: FETCH_ALL_COLLECTIONS
});

export const receiveAllCollections = (collections) => ({
  type: RECEIVE_ALL_COLLECTIONS,
  collections
});

export const fetchCollection =(id) => ({
  type: FETCH_COLLECTION,
  id: id
});

export const receiveCollection =(collection) => ({
  type: RECEIVE_COLLECTION,
  collection: collection
});

export const createCollection =(collection) => ({
  type: CREATE_COLLECTION,
  collection: collection
});

export const updateCollection = (collection) => ({
  type: UPDATE_COLLECTION,
  collection: collection
});

export const receiveUpdatedCollection = (collection) => ({
  type: RECEIVE_UPDATED_COLLECTION,
  collection
});

export const deleteCollection = (collection) => ({
  type: DELETE_COLLECTION,
  collection: collection
});

export const receiveDeletedCollection = (collection) => ({
  type: RECEIVE_DELETED_COLLECTION,
  collection: collection
});

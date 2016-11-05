export const FETCH_ALL_CATEGORIES = "FETCH_ALL_CATEGORIES";
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES
});

export const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

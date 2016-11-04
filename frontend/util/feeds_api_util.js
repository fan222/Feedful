export const fetchAllFeeds = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/feeds",
    success
  });
};


export const fetchFeed = (id,success) => {
  $.ajax({
    method: "GET",
    url: `/api/feeds/${id}`,
    success
  });
};

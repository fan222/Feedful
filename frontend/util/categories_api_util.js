export const fetchAllCollections = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/collections",
    success
  });
};

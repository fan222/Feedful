export const fetchAllCategories = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/categories",
    success
  });
};

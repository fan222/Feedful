export const fetchAllArticles = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/articles",
    success
  });
};


export const fetchArticle = (id, success) => {
  $.ajax({
    method: "GET",
    url: `/api/articles/${id}`,
    success
  });
};

export const createArticle =(article, success) => {
  $.ajax({
    method: "POST",
    url: "/api/articles",
    data: {article: article},
    success
  });
};

export const deleteArtcile =(id, success) => {
  $.ajax({
    method: "DELETE",
    url: `/api/articles/${id}`,
    success
  });
};

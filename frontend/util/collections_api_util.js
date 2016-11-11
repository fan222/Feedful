export const fetchAllCollections = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/collections",
    success
  });
};

export const fetchCollection = (id, success) => {
  $.ajax({
    method: "GET",
    url: `/api/collections/${id}`,
    success
  });
};

export const createCollection = (collection, success) => {
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: {collection: collection},
    success
  });
};

export const updateCollection = (collection, success) => {
  $.ajax({
    method: "PATCH",
    url: `/api/collections/${collection.id}`,
    data: {collection: collection},
    success
  });
};

export const deleteCollection = (collection, success) => {
  $.ajax({
    method: "DELETE",
    url: `/api/collections/${collection.id}`,
    success
  });
};

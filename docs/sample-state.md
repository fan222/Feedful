```js
{
  session: {
    currentUser: {
    id: 1,
    username: "user1"
    },
    errors: []
  }
  feeds: {
    1: {
      id: 1,
      name: "feed 1",
      url: "feed1_url",
      category: "category1",
      articles: {
        1: {
          id: 1,
          title: "articleName",
          summary: "articleSummary",
          author: "authorname",
          image: "image"
        }
      }
    }
  },
  collections: {
    1: {
      id: 1,
      name: "collection1",
      feeds_id: [1,2,3]
    }
  },
  article: {
    id: 1,
    url: "article_url",
    content: "content",
  }
}
```

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
      description: "feed 1 description",
      website: "www.1.com",
      articles: {
        1: {
          id: 1,
          feed_id: 1,
          entry_id: 1,
          published: 2010,
          title: "articleName",
          summary: "articleSummary",
          author: "authorname",
          image: "image",
          url: "article_url",
          content: "content"
        }
      }
    }
  },
  collections: {
    1: {
      id: 1,
      name: "collection1",
      feeds_ids: [1,2,3]
    }
  },
  categories: {
    1: {
      id: 1,
      name: "category1",
      feeds_ids: [1,2,3]
    }
  },
  article: {
    1: {
      id: 1,
      title: "article1",
      user_id: 1,
      feed_id: 1,
      author: "name1",
      url: "url1",
      entry_id: "123",
      published: "2011",
      image: "image1",
      summary: "summary1",
      content: "content"
    }
  }
}
```

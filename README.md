
# Feedful

[Feedful] [heroku]


Feedful is a full-stack web application inspired be [Feedly] [feedlysite]. Feedful is designed to give user interesting feeds articles both for fun and work.
It uses Ruby on Rails for backend, and React-Redux for front-end.

## Features

### RSS feeds
Feeds urls are store in database. Feedful uses Feedjira gem to fetch feeds. And new feeds is fetched and rendered dynamic. User will have the newest content all the time.

* Everytime users enter the home page, a ajax request is sent to fetch all feeds' data.
```javascript
  export const fetchAllFeeds = (success) => {
    $.ajax({
      method: "GET",
      url: "/api/feeds",
      success
    });
  };
```

* At backend, Feedjira::Feed.fetch_and_parse function is called on feed-urls.
```ruby
  feed_detail = Feedjira::Feed.fetch_and_parse(feed.url)
```

* In order to get image sources for each articles of feeds, Feedful uses regex to get the image tag's src of original article.
```ruby
  /<img.+src="([^"]+)"/.match(string)[1]
```

### Article
With React-Modal, articles are rendered in a very clean way. Each time users click on a article block, a article detail will pop up from right.
* This is accomplished through React-Modal's customStyles.
```javascript
  const customStyles = {
    content: {
      right                       : '-100%',
      transition                  : '.5s',
    }
  };
  onModalOpen() {
    customStyles.content.left = 'auto';
    customStyles.content.right = '0';
  }
```

* Since the content of fetched articles are strings, Feedful uses dangerouslySetInnerHTML to insert articles. In this way, articles have cleaner structure.
```javascript
  <div dangerouslySetInnerHTML={this.dangerHtml(this.props.article)}/>
```


### Collection
User can create and manage their collection.



### Favorites
User can like and unlike articles so that they can come back easily.

User can manage and read their liked articles.


User can like and unlike articles while they read articles.








[heroku]: http://www.feedful.co/
[feedlysite]: https://feedly.com/i/welcome
[collection_shot]: ./docs/wireframes/screen_shot/.png
[favorites_page]: ./docs/wireframes/screen_shot/.png
[favorites_article]: ./docs/wireframes/screen_shot/.png
[rss_feeds]: ./docs/wireframes/screen_shot/.png
[article_shot]: ./docs/wireframes/screen_shot/.png
[new_collection]: ./docs/wireframes/screen_shot/.png

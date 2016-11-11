
# Feedful

[Feedful] [heroku]


Feedful is a full-stack web application inspired be [Feedly] [feedlysite]. Feedful is designed to give user interesting feeds articles both for fun and work.
It uses Ruby on Rails for backend, and React.js with Flux framework for front-end.

## Features

### Collection
User can create and manage their collection.
![collection] [collection_shot]
![new_col] [new_collection]

### Favorites
User can like and unlike articles so that they can come back easily.

User can manage and read their liked articles.
![favoritespage] [favorites_page]

User can like and unlike articles while they read articles.
![favoritesarticle] [favorites_article]

### RSS feeds
Feed url is store in database. Feedful uses Feedjira gem to fetch feeds. And new feeds is fetched and rendered dynamic. User will have the newest content all the time.

Feedful uses regex to get the image tag's src of original article.
```javascript
    /<img.+src="([^"]+)"/.match(string)[1]
```
![rss] [rss_feeds]

### Article
With React-Modal, articles are rendered in a very clean way.

Since the content of fetched articles are strings, Feedful uses dangerouslySetInnerHTML to insert articles. In this way, articles have cleaner structure.
```javascript
    <div dangerouslySetInnerHTML={this.dangerHtml(this.props.article)}/>
```

![article] [article_shot]






[heroku]: http://www.feedful.co/
[feedlysite]: https://feedly.com/i/welcome
[collection_shot]: ./docs/wireframes/screen_shot/collection_manage.png
[favorites_page]: ./docs/wireframes/screen_shot/favoritespage.png
[favorites_article]: ./docs/wireframes/screen_shot/favorites_article.png
[rss_feeds]: ./docs/wireframes/screen_shot/rss_feeds.png
[article_shot]: ./docs/wireframes/screen_shot/articles.png
[new_collection]: ./docs/wireframes/screen_shot/new_collection.png

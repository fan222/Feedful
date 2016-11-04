# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'fan', password: 123456)

Feed.create!([
{name: "MacRumors", website: "http://www.macrumors.com/", url: "http://feeds.macrumors.com/MacRumors-All", description: "Apple, iPhone, iPad, Mac News and Rumors"},
{name: "React", website: "https://facebook.github.io/react/", url: "https://facebook.github.io/react/feed.xml", description: "A JavaScript library for building user interfaces"},
{name: "NewsJavascrip", website: "https://www.javascript.com/", url: "https://www.javascript.com/feed/rss", description: "Learn JavaScript and stay connected with the latest news created and curated by the JavaScript community"}
])

Category.create!([
  {name: 'Mac'},
  {name: 'Coding'},
])


CategoryFeed.create!([
  {feed_id: Feed.find_by(name: "MacRumors").id, category_id: Category.find_by(name: "Mac").id},
  {feed_id: Feed.find_by(name: "React").id, category_id: Category.find_by(name: "Coding").id},
  {feed_id: Feed.find_by(name: "NewsJavascrip").id, category_id: Category.find_by(name: "Coding").id},

  ])


Collection.create!([
  {name: 'Tech', user_id: User.find_by(username: 'fan').id},
  {name: 'My code', user_id: User.find_by(username: 'fan').id},
  ])

CollectionFeed.create!([
  {collection_id: Collection.find_by(name: 'Tech').id, feed_id: Feed.find_by(name: 'MacRumors').id},
  {collection_id: Collection.find_by(name: 'My code').id, feed_id: Feed.find_by(name: 'React').id},
  {collection_id: Collection.find_by(name: 'My code').id, feed_id: Feed.find_by(name: 'NewsJavascrip').id},
  ])


Article.create!([
  {title: "Mac yeah1", feed_id: 1, url: "mac_url1"},
  {title: "Mac yeah2", feed_id: 1, url: "mac_url2"},
  {title: "code1", feed_id: 2, url: "code_url1"},
  {title: "code2", feed_id: 2, url: "code_url2"},
  {title: "code3", feed_id: 3, url: "code_url3"},
  {title: "code4", feed_id: 3, url: "code_url4"},
  ])

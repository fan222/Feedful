# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'fan', password: 123456)

Feed.create!([
{name: "IndieGames", url: "http://www.indiegames.com/blog/atom.xml"},
{name: "The Verge", url: "http://www.theverge.com/rss/group/features/index.xml"},
{name: "Wired", url: "http://www.wired.com/feed/"},
])

Category.create!([
  {name: 'General'},
  {name: 'Game'},
])


CategoryFeed.create!([
  {feed_id: Feed.find_by(name: "The Verge").id, category_id: Category.find_by(name: "General").id},
  {feed_id: Feed.find_by(name: "Wired").id, category_id: Category.find_by(name: "General").id},
  {feed_id: Feed.find_by(name: "IndieGames").id, category_id: Category.find_by(name: "Game").id},

  ])


Collection.create!([
  {name: 'Best Tech', user_id: User.find_by(username: 'fan').id},
  {name: 'My Game', user_id: User.find_by(username: 'fan').id},
  ])

CollectionFeed.create!([
  {collection_id: Collection.find_by(name: 'Best Tech').id, feed_id: Feed.find_by(name: 'The Verge').id},
  {collection_id: Collection.find_by(name: 'Best Tech').id, feed_id: Feed.find_by(name: 'Wired').id},
  {collection_id: Collection.find_by(name: 'My Game').id, feed_id: Feed.find_by(name: 'IndieGames').id},
  ])


Article.create!([
  {title: "game yeah1", feed_id: 1, url: "game_url"},
  {title: "game yeah2", feed_id: 1, url: "game_url"},
  {title: "tech1", feed_id: 2, url: "game_url"},
  {title: "tech2", feed_id: 2, url: "game_url"},
  {title: "tech3", feed_id: 3, url: "game_url"},
  {title: "tech4", feed_id: 3, url: "game_url"},
  ])

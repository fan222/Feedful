user1 = User.create!(username: 'fan', password: 123456)

Feed.create!([
{name: "MacRumors", website: "http://www.macrumors.com/", url: "http://feeds.macrumors.com/MacRumors-All", description: "Apple, iPhone, iPad, Mac News and Rumors."},
{name: "Bike EXIF", website: "http://www.bikeexif.com/", url: "http://www.bikeexif.com/feed", description: "Bike EXIF is a showcase for the world's most exciting custom motorcycles."},
{name: "The Verge", website: "http://www.theverge.com/", url: "http://www.theverge.com/rss/group/features/index.xml", description: "Covering the intersection of technology, science, art, and culture."},
{name: "TechCrunch", website: "https://techcrunch.com/", url: "http://feeds.feedburner.com/TechCrunch/", description: "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news."},
{name: "Digital Trends", website: "http://www.digitaltrends.com/", url: "http://www.digitaltrends.com/feed/", description: "Digital Trends is your premier source for technology news and unbiased expert product reviews of HDTVs, laptops, smartphones and more."},
{name: "Wired", website: "https://www.wired.com/", url: "http://www.wired.com/feed/", description: "Get in-depth coverage of current and future trends in technology, and how they are shaping business, entertainment, communications, science, politics, and culture."},
{name: "Lifehacker", website: "http://lifehacker.com/", url: "http://lifehacker.com/rss", description: "Tips and downloads for getting things done."},
{name: "ReadWrite", website: "http://readwrite.com/", url: "http://readwrite.com/feed/", description: "Web Apps, Web Technology Trends, Social Networking and Social Media - ReadWrite"},
{name: "Engadget", website: "https://www.engadget.com/", url: "https://www.engadget.com/rss.xml", description: "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics."},
{name: "Mashable", website: "http://mashable.com/", url: "http://feeds.mashable.com/Mashable", description: "Leading source for news, information & resources for the Connected Generation."},
{name: "Ars Technica", website: "http://arstechnica.com/", url: "http://feeds.arstechnica.com/arstechnica/index/", description: "Serving the Technologist for more than a decade. IT news, reviews, and analysis."}
])

Category.create!([
  {name: 'Mac'},
  {name: 'Tech'},
  {name: 'Car'}
])


CategoryFeed.create!([
  {feed_id: Feed.find_by(name: "MacRumors").id, category_id: Category.find_by(name: "Mac").id},
  {feed_id: Feed.find_by(name: "Lifehacker").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Wired").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Digital Trends").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "TechCrunch").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "The Verge").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "ReadWrite").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Engadget").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Mashable").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Ars Technica").id, category_id: Category.find_by(name: "Tech").id},
  {feed_id: Feed.find_by(name: "Bike EXIF").id, category_id: Category.find_by(name: "Car").id}
  ])


Collection.create!([
  {name: 'Cool Car', user_id: User.find_by(username: 'fan').id},
  {name: 'My Tech', user_id: User.find_by(username: 'fan').id}
  ])

CollectionFeed.create!([
  {collection_id: Collection.find_by(name: 'My Tech').id, feed_id: Feed.find_by(name: 'MacRumors').id},
  {collection_id: Collection.find_by(name: 'My Tech').id, feed_id: Feed.find_by(name: 'Wired').id},
  {collection_id: Collection.find_by(name: 'My Tech').id, feed_id: Feed.find_by(name: 'TechCrunch').id},
  {collection_id: Collection.find_by(name: 'My Tech').id, feed_id: Feed.find_by(name: 'The Verge').id},
  {collection_id: Collection.find_by(name: 'My Tech').id, feed_id: Feed.find_by(name: 'Lifehacker').id},
  {collection_id: Collection.find_by(name: 'Cool Car').id, feed_id: Feed.find_by(name: 'Bike EXIF').id}
  ])


Article.create!([
  { title: "AT&T's Optional 'Stream Saver' Feature Will Throttle Streaming Video Starting in 2017", feed_id: 1, url: "http://www.macrumors.com/2016/11/11/att-stream-saver-video-throttling-option/",
    user_id: 1, author: "Juli Clover", entry_id: "http://www.macrumors.com/2016/11/11/att-stream-saver-video-throttling-option/",
  image: "http://cdn.macrumors.com/article-new/2015/10/page_att.jpg", published: "2016-11-11T18:39:17.000Z"
  },
  {user_id: 1, author: "Lauren Goode", entry_id: "http://www.theverge.com/a/verge-2021/google-x-astro-teller-interview-drones-innovation", feed_id: 3, image: "https://cdn0.vox-cdn.com/thumbor/qvC2OqAZWNK6P9EeedekKZ4O_ZY=/0x0:2039x1359/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/51724489/vrg_1228_teller_lede_fin.0.0.jpg", published: "2016-11-08T14:06:22.000Z", title: "Delivery drones will mean the end of ownership", url: "http://www.theverge.com/a/verge-2021/google-x-astro-teller-interview-drones-innovation"}
  ])

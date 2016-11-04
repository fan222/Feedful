json.id @feed.id
json.name @feed.name
json.url @feed.url
json.website @feed.website
json.description @feed.description
json.articles fetch_parse(@feed)

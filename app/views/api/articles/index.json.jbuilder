if !@articles
  {}
else
  @articles.each do |article|
    json.set! article.id do
      json.id article.id
      json.title article.title
      json.user_id article.user_id
      json.feed_id article.feed_id
      json.author article.author
      json.url article.url
      json.entry_id article.entry_id
      json.published article.published
      json.image article.image
      json.summary article.summary
      json.content article.content
    end
  end
end

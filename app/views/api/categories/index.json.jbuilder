@categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.name category.name
    json.feeds_ids get_feeds_id(category)
  end
end

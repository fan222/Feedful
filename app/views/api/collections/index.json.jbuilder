if !@collections
  {}
else
  @collections.each do |collection|
    json.set! collection.id do
      json.id collection.id
      json.name collection.name
      json.feeds_ids get_feeds_id(collection)
    end
  end
end

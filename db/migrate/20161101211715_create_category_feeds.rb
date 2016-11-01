class CreateCategoryFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :category_feeds do |t|
      t.integer :feed_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :category_feeds, [:feed_id, :category_id], unique: true
    add_index :category_feeds, :feed_id
    add_index :category_feeds, :category_id
  end
end

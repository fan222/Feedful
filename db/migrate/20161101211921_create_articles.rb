class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :author
      t.integer :feed_id, null:false
      t.string :url, null: false
      t.string :entry_id
      t.string :published
      t.string :image
      t.text :summary
      t.text :content
      t.timestamps
    end

    add_index :articles, :feed_id
  end
end

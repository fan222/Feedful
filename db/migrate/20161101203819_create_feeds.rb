class CreateFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :feeds do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.string :description, null: false
      t.string :website, null: false
      t.timestamps
    end
  end
end

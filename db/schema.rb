# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161101211921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.string   "author"
    t.integer  "feed_id",    null: false
    t.string   "url",        null: false
    t.string   "entry_id"
    t.string   "published"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id"], name: "index_articles_on_feed_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "category_feeds", force: :cascade do |t|
    t.integer  "feed_id",     null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id"], name: "index_category_feeds_on_category_id", using: :btree
    t.index ["feed_id", "category_id"], name: "index_category_feeds_on_feed_id_and_category_id", unique: true, using: :btree
    t.index ["feed_id"], name: "index_category_feeds_on_feed_id", using: :btree
  end

  create_table "collection_feeds", force: :cascade do |t|
    t.integer  "feed_id",       null: false
    t.integer  "collection_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["collection_id"], name: "index_collection_feeds_on_collection_id", using: :btree
    t.index ["feed_id", "collection_id"], name: "index_collection_feeds_on_feed_id_and_collection_id", unique: true, using: :btree
    t.index ["feed_id"], name: "index_collection_feeds_on_feed_id", using: :btree
  end

  create_table "collections", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id", using: :btree
  end

  create_table "feeds", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "url",         null: false
    t.string   "description", null: false
    t.string   "website",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

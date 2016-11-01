# == Schema Information
#
# Table name: feeds
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feed < ApplicationRecord
  validates :name, :url, presence: true

  has_many :articles
  has_many :collection_feeds
  has_many :collections, through: :collection_feeds, source: :collection

  has_many :category_feeds,
  has_many :categories, through: :category_feeds, source: :category
end

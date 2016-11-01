# == Schema Information
#
# Table name: category_feeds
#
#  id          :integer          not null, primary key
#  feed_id     :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoryFeed < ApplicationRecord
  validates :feed_id, :category_id, presence: true
  validates :feed_id, uniqueness: { scope: :category_id }
  
  belongs_to :feed
  belongs_to :category
end

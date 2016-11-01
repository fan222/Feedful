# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
	validates :name, :user_id, presence: true

  belongs_to :user

  has_many :collection_feeds, dependent: :destroy
  has_many :feeds, through: :collection_feeds, source: :feed
  has_many :articles, through: :feeds, source: :articles
end

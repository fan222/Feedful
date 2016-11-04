# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author     :string
#  feed_id    :integer          not null
#  url        :string           not null
#  entry_id   :string
#  published  :string
#  image      :string
#  summary    :text
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  validates :title, :feed_id, presence: true

  belongs_to :feed
end

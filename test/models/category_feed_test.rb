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

require 'test_helper'

class CategoryFeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  url         :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class FeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

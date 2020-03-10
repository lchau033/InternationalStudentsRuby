require 'test_helper'

class UpvoteControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get upvote_create_url
    assert_response :success
  end

  test "should get destroy" do
    get upvote_destroy_url
    assert_response :success
  end

end

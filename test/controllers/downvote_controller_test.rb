require 'test_helper'

class DownvoteControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get downvote_create_url
    assert_response :success
  end

  test "should get destroy" do
    get downvote_destroy_url
    assert_response :success
  end

end

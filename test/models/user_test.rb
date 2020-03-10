require "test_helper"

class UsersTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "creating a user" do
    assert_raises
      visit main_app.register_path
      Capybara::Screenshot.screenshot_and_open_image

      fill_in 'user_name', with: 'User 1'
      fill_in 'user_email', with: 'email@domain.com'
      fill_in 'user_password', with: 'password'
      fill_in 'user_password_confirmation', with: 'password'

      expect{
        click_button 'Create Account'
      }.to change(User, :count).by(1)
  end
end

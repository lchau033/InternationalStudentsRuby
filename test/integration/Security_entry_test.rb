require 'test_helper'

class Security_entry_test < ActionDispatch::IntegrationTest

  test "test security for admin page for normal users" do
    assert_raises
    visit root_path

    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'

    expect{
      click_button 'Sign Up'
    }.to change(User, :count).by(1)

    visit main_app.admin_users_path
    current_path.should == content_path
  end

  test "test security for non users trying to access user pages" do
    visit root_path

    visit main_app.profile_path
    current_path.should == root_path

    visit main_app.stories_path
    current_path.should == root_path
  end

  test "test security for non users trying to access admin page" do
    visit root_path

    visit main_app.admin_users_path
    current_path.should == root_path
  end
end
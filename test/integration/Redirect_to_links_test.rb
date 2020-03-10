require 'test_helper'

class Redirect_to_links_test < ActionDispatch::IntegrationTest

  def setup
    visit root_path

    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'
    click_button 'Sign Up'
  end

  test 'test login logout after user creation' do
    current_path.should == forum_path
    click_link 'Log Out'
    current_path.should == root_path

    fill_in 'email', with: 'email@domain.com'
    fill_in 'password',  with: 'password'
    click_button 'Login'

    current_path.should == forum_path
  end

  test 'test navbar links after login' do
    current_path.should == forum_path

    click_link 'Profile'
    current_path.should == main_app.profile_path

    click_link 'Question Board'
    current_path.should == main_app.forum_path
  end

  test 'test admin login and links' do
    click_link 'Log Out'

    @user = User.where("email = ?", 'email@domain.com').first
    @user.admin = true
    @user.save

    fill_in 'email', with: 'email@domain.com'
    fill_in 'password',  with: 'password'
    click_button 'Login'

    click_link 'Profile'
    current_path.should == main_app.profile_path

    click_link 'Question Board'
    current_path.should == main_app.forum_path
  end
end
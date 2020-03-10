require 'test_helper'

class Profile_edit_test < ActionDispatch::IntegrationTest

  def setup
    visit root_path

    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'
    click_button 'Sign Up'

    click_link 'Profile'

    click_link 'Edit Profile'
  end

  test 'change name' do

    fill_in 'user_name', with: 'User 2'
    click_button 'Update'

    @user = User.where("email = ?", 'email@domain.com').first
    assert_equal 'User 2', @user.name
  end

  test 'change email' do

    fill_in 'user_email', with: 'email@domain1.com'
    click_button 'Update'

    @user = User.where("name = ?", 'User 1').first
    assert_equal 'email@domain1.com', @user.email
  end

  test 'change province' do

    fill_in 'user_email', with: 'email@domain1.com'
    click_button 'Update'

    @user = User.where("name = ?", 'User 1').first
    assert_equal 'email@domain1.com', @user.email
  end

=begin
  test 'change country' do

    within '#country' do
      find("option[value='LB']").click
    end
    click_button 'Update'

    @user = User.where("name = ?", 'User 1').first
    assert_equal 'LB', @user.country
  end

  test 'change province' do

     within '#province' do
      find("option[value='Alberta']").click
    end
    click_button 'Update'

    @user = User.where("name = ?", 'User 1').first
    assert_equal 'Alberta', @user.province
  end
=end

  test 'change bio' do

    fill_in 'user_bio', with: 'testing changing bio'
    click_button 'Update'

    @user = User.where("name = ?", 'User 1').first
    assert_equal 'testing changing bio', @user.bio
  end
end
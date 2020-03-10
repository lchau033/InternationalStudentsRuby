require "test_helper"

class UsersTest < ActionDispatch::IntegrationTest

  def setup
    visit root_path
    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'
    click_button 'Sign Up'

    click_link 'Log Out'

    @user = User.where("email = ?", 'email@domain.com').first
    @user.admin = true
    @user.save

    fill_in 'email', with: 'email@domain.com'
    fill_in 'password',  with: 'password'
    click_button 'Login'

    click_link 'Featured Stories'
  end

  test "creating a featured story" do
    click_link 'Create a new story'
    fill_in 'story_title', with: 'testing2'
    fill_in 'story_body', with: 'body testing'

    expect{
      click_button 'Create a new story'
    }.to change(Story, :count).by(1)
  end

  test "update story title" do
    click_link 'Create a new story'
    fill_in 'story_title', with: 'testing2'
    fill_in 'story_body', with: 'body testing'

    expect{
      click_button 'Create a new story'
    }.to change(Story, :count).by(1)
    click_link 'Featured Stories'
    click_link 'READ MORE'
    click_link 'Edit this story'

    fill_in 'story_title', with: 'testing1'
    click_button 'Update'

    @story = Story.where("title = ?", 'testing1').first
    assert_equal 'testing1', @story.title
  end

  test "update story body" do
    click_link 'Create a new story'
    fill_in 'story_title', with: 'testing2'
    fill_in 'story_body', with: 'body testing'

    expect{
      click_button 'Create a new story'
    }.to change(Story, :count).by(1)
    click_link 'Featured Stories'
    click_link 'READ MORE'
    click_link 'Edit this story'

    fill_in 'story_body', with: 'testing1'
    click_button 'Update'

    @story = Story.where("title = ?", 'testing2').first
    assert_equal 'testing1', @story.body
  end
end
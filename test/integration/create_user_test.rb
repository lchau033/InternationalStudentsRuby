require "test_helper"

class UsersTest < ActionDispatch::IntegrationTest

  def setup
      visit root_path
  end

  test "creating a user" do
    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'

    expect{
      click_button 'Sign Up'
    }.to change(User, :count).by(1)
  end

  test "creating a user with non matching passwords" do
    post '/users',
         user: { :name => "valid user",
                 :password => "userpassword1",
                 :password_confirmation => "userpassword",
                 :email => "a@b.com"}

    assert_equal "Password confirmation doesn't match Password", flash[:warning]
  end

  test "creating a user with invalid password" do
    post '/users',
         user: { :name => "valid user",
                 :password => "us",
                 :password_confirmation => "us",
                 :email => "a@b.com"}

    assert_equal 'Password is too short (minimum is 8 characters)', flash[:warning]
  end

  test "creating a user with an already used email" do
    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'

    expect{
      click_button 'Sign Up'
    }.to change(User, :count).by(1)

    current_path.should == forum_path
    click_link 'Log Out'
    current_path.should == root_path
    post '/users',
         user: { :name => "valid user",
                 :password => "password",
                 :password_confirmation => "password",
                 :email => "email@domain.com"}

    assert_equal 'Email has already been taken.', flash[:warning]
  end

  test "creating a user with an already used name" do
    fill_in 'user_name', with: 'User 1'
    fill_in 'user_email', with: 'email@domain.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'

    expect{
      click_button 'Sign Up'
    }.to change(User, :count).by(1)

    current_path.should == forum_path
    click_link 'Log Out'
    current_path.should == root_path
    post '/users',
         user: { :name => "User 1",
                 :password => "password",
                 :password_confirmation => "password",
                 :email => "email1@domain.com"}

    assert_equal 'Name has already been taken.', flash[:warning]
  end
end
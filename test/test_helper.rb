ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'
require 'capybara/minitest'
require 'capybara/poltergeist'
require 'rspec'
require 'capybara'
require 'capybara-screenshot'
require 'capybara/rspec'
require 'capybara-screenshot/minitest'
require 'mocha/mini_test'
require 'bundler/setup'

RSpec.configure do |config|
  config.mock_with :mocha
end

class ActionDispatch::IntegrationTest
  # Make the Capybara DSL available in all integration tests
  include Capybara::DSL
  # Make `assert_*` methods behave like Minitest assertions
  include Capybara::Minitest::Assertions

  include Capybara::Screenshot::MiniTestPlugin

  include RSpec::Matchers



  Capybara.javascript_driver = :poltergeist
  Capybara.default_host = "http://127.0.0.1:3000"
  Capybara.app_host = "http://127.0.0.1:3000"
  # Reset sessions and driver between tests
  # Use super wherever this method is redefined in your individual test classes
  def teardown
    Capybara.reset_sessions!
    Capybara.use_default_driver
  end
end

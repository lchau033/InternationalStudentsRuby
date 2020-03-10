require_relative 'boot'
require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
I18n.available_locales = [:en, :fr]

module CapstoneInternational
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
	  config.time_zone = 'Eastern Time (US & Canada)'
	  config.active_record.default_timezone = :local
    config.i18n.default_locale = :en
    config.serve_static_assets = true
  end
end



class ApplicationController < ActionController::Base
  # set the locale and require the user to login except on certain pages
  before_action :require_login, :except => [:create, :destroy, :log_in, :register]
  before_action :set_locale
  include ActionController::RequestForgeryProtection
  protect_from_forgery prepend: true
  # Redirect to Index Page if user isn't logged in
  private
  def not_authenticated
    flash.now[:error] = 'You have to authenticate to access this page.'
    redirect_to root_path
  end

  # Set locale if params is available otherwise set to default locale
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
    Rails.application.routes.default_url_options[:locale]= I18n.locale
  end

  # Reconstruct a date object from date_select helper form params
  def build_date_from_params(date_of_entry, params)
    Date.new(params["#{date_of_entry.to_s}(1i)"].to_i,
             params["#{date_of_entry.to_s}(2i)"].to_i,
             params["#{date_of_entry.to_s}(3i)"].to_i)
  end

  # date = build_date_from_params(:user, params[:date_of_entry])

end


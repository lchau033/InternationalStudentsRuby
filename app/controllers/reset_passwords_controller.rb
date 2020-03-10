class ResetPasswordsController < ApplicationController
  include ActionController::RequestForgeryProtection
  include ResetPasswordsHelper

  protect_from_forgery with: :exception, unless: -> { request.format.json? }
  skip_before_filter :require_login
  skip_before_filter :verify_authenticity_token

  def new
  end

  def protect_from_forgery
    false
  end

  def create
    say_no_to_protect_against_forgery!
    @user = User.find_by_email(params[:email])
    @user.deliver_reset_password_instructions! if @user
    reset_password_email(@user)
    say_no_to_protect_against_forgery!
    flash[:success] = 'Instructions have been sent to your email.'
    redirect_to log_in_path
  end

  def edit
    @token = params[:id]
    @user = User.load_from_reset_password_token(@token)

    not_authenticated if @user.blank?
  end

  def update
    @token = params[:id]
    @user = User.load_from_reset_password_token(@token)

    not_authenticated && return if @user.blank?

    @user.password_confirmation = params[:user][:password_confirmation]
    if @user.change_password!(params[:user][:password])
      flash[:success] = 'Password was successfully updated.'
      redirect_to log_in_path
    else
      render "edit"
    end
  end

  def say_no_to_protect_against_forgery!
    _helpers.module_eval do
      def protect_against_forgery?
        false
      end
    end
  end

end
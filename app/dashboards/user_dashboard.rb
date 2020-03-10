require "administrate/base_dashboard"

class UserDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    email: Field::String,
    crypted_password: Field::String,
    salt: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    name: Field::String,
    admin: Field::Boolean,
    country: Field::String,
    signed_in: Field::Boolean,
    password: PasswordField,
    password_confirmation: PasswordField
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :name,
    :email,
    :country,
    :created_at,
    :admin,
    #:crypted_password,
    #:salt,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :email,
    :crypted_password,
    :salt,
    :created_at,
    :updated_at,
    :name,
    :admin,
    :country,
    :signed_in,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :email,
    #:crypted_password,
    #:salt,
    :password,
    :password_confirmation,
    :admin,
  ].freeze

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(user)
  #   "User ##{user.id}"
  # end
end

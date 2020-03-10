# All Administrate controllers inherit from this `Admin::ApplicationController`,
# making it the ideal place to put authentication logic or other
# before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :require_login
    before_action :authenticate_admin


    def authenticate_admin
      if not current_user.admin?
        redirect_to content_path
      end
    end

    helper_method :nav_link_state
    def nav_link_state(resource)
      if resource_name.to_s.pluralize == resource.to_s && resource_name.to_s.pluralize != "Messages"
        :active
      else
        :inactive
      end
    end

    # Override this value to specify the number of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end

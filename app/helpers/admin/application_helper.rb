module Admin::ApplicationHelper

  def javascript(*files)
    content_for(:head_javascript) { javascript_include_tag(*files, 'data-turbolinks-track': 'reload') }
  end

  def stylesheet(*files)
    content_for(:head_stylesheet) { stylesheet_link_tag(*files, 'data-turbolinks-track': 'reload') }
  end

end


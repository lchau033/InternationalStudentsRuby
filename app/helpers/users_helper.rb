module UsersHelper
  def conversation_interlocutor(conversation)
    conversation.recipient == current_user ? conversation.sender : conversation.recipient
  end

  def show_avatar(user)
    if user.image_file_name?
      image_tag(user.image.url(:medium), class: 'avatar-square avatar-inherit img-responsive')
    else
      render partial: 'avatar'
    end
  end

  def add_user_to_sendgrid(user)
    require 'rest_client'
    api_key = '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'
    headers = {'Authorization' => "Bearer #{api_key}"}
    data = {:email => @user.email}
    response = RestClient.post 'https://api.sendgrid.com/v3/contactdb/recipients', [data].to_json, headers
  end

  def show_picture(story)
    if story.image?
      image_tag(story.image_url, class: 'avatar-square avatar-inherit img-responsive', style:'float:left;')
    end
  end
end


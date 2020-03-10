# Facebook like chat Messages Controller
# CREDITS: https://www.linkedin.com/pulse/facebook-like-chat-application-using-ruby-rails-kanhaiya-kumar?articleId=8194060515700978927

class MessagesController < ApplicationController
  protect_from_forgery prepend: true

  # first we get the conversation associated to the message and then we create the
  # message using the javascript (create.js) and then we save it
  def create
    @conversation = Conversation.find(params[:conversation_id])
    @message = @conversation.messages.build(message_params)
    @message.user_id = current_user.id
    @message.save!
    @path = conversation_path(@conversation)
    @admin = current_user.admin
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
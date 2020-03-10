# Facebook like chat Conversation Controller
# CREDITS: https://www.linkedin.com/pulse/facebook-like-chat-application-using-ruby-rails-kanhaiya-kumar?articleId=8194060515700978927
class ConversationsController < ApplicationController

  layout :get_layout

  def get_layout
    if not current_user.admin?
      false
    end
  end

  # conversation between a receiver and a sender is created it doesn't exist
  def create
    if Conversation.between(params[:sender_id],params[:recipient_id]).present?
      @conversation = Conversation.between(params[:sender_id],params[:recipient_id]).first
    else
      @conversation = Conversation.create!(conversation_params)
    end

    render json: { conversation_id: @conversation.id }
  end


  # we get the conversation and the receiver as well as the corresponding messages
  # and we save in database that the conversation was open
  def show
    @conversation = Conversation.find(params[:id])
    @reciever = interlocutor(@conversation)
    @messages = @conversation.messages.sort_by(&:created_at)
    @message = Message.new
    @admin = current_user.admin
    if @admin
      @conversations = Conversation.where("recipient_id = ?", current_user.id)
    else
      @conversation.update_column("open",true)
    end
  end



  private
  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end

  def interlocutor(conversation)
    current_user == conversation.recipient ? conversation.sender : conversation.recipient
  end
end
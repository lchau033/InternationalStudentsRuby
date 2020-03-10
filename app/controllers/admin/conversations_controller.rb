# Facebook like chat Conversation Controller
# CREDITS: https://www.linkedin.com/pulse/facebook-like-chat-application-using-ruby-rails-kanhaiya-kumar?articleId=8194060515700978927

## I added  amn index method that would show the admin all the conversations
#  in order of when they were created I also added that part to show since
# show also has the conversations on the side
module Admin
  class ConversationsController < Admin::ApplicationController
    layout :get_layout

    def get_layout
      if not current_user.admin?
        false
      end
    end

    def index
      @users = User.all
      @conversations = Conversation
                                .joins(:messages)
                                .where(["conversations.recipient_id = ?  or conversations.sender_id = ?", current_user.id, current_user.id ])
                                .group("conversations.id, messages.created_at")
                                .order("conversations.created_at DESC").distinct("conversations.id")
      gon.open = false
    end

    def create
      if Conversation.between(params[:sender_id],params[:recipient_id]).present?
        @conversation = Conversation.between(params[:sender_id],params[:recipient_id]).first
      else
        @conversation = Conversation.create!(conversation_params)
      end

      render json: { conversation_id: @conversation.id }
    end

    def show
      @conversation = Conversation.find(params[:id])
      @reciever = interlocutor(@conversation)
      @messages = @conversation.messages.sort_by(&:created_at)
      @message = Message.new
      @admin = current_user.admin
      if @admin
        @conversations = Conversation
                             .joins(:messages)
                             .where(["conversations.recipient_id = ?  or conversations.sender_id = ?", current_user.id, current_user.id ])
                             .group("conversations.id, messages.created_at")
                             .order("conversations.created_at DESC").distinct("conversations.id")
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
end

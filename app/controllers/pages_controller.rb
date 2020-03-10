class PagesController < ApplicationController

  #  Load login page (only if user isn't logged in)
  def index
    if current_user
      if current_user.admin?
        redirect_to admin_users_path
      elsif current_user
        redirect_to content_path
      end
    end
  end

  # Load content page and set up conversation
  def content
    $admin = User.where("admin = ? AND signed_in = ?", true, true).first
    if $admin.nil?
      $admin = User.where("admin = ?", true).first
    end
    if not $admin.nil?
      $conversation = Conversation.between(current_user.id,$admin.id).first
    end
    if $conversation.nil? and not $admin.nil?
      $conversation = Conversation.create(sender_id: current_user.id, recipient_id: $admin.id)
    end
    if not $conversation.nil?
      gon.open = $conversation.open
    end
  end


  # Load chat_admin
  def chat_admin
    if not current_user.admin?
      redirect_to content_path
    else
      @users = User.all
      @conversations = Conversation.where("recipient_id = ?", current_user.id)
    end
    gon.open = false
  end

  # Stop Conversation and set open to false
  def stopConversation
    $conversation.update_column("open",false)
  end
end


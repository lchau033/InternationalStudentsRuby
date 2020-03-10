module Admin::ConversationsHelper
  def interlocutor(conversation)
    current_user == conversation.recipient ? conversation.sender : conversation.recipient
  end

  def self_or_other(message)
    message.user == current_user ? "self" : "other"
  end

  def message_interlocutor(message)
    message.user == message.conversation.sender ? message.conversation.sender : message.conversation.recipient
  end
end

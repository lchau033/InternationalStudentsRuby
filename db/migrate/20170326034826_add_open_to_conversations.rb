class AddOpenToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :open, :boolean, default: false
  end
end

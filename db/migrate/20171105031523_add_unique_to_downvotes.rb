class AddUniqueToDownvotes < ActiveRecord::Migration[5.0]
  def change
    add_index :downvotes, [:post_id, :user_id], :unique => true
  end
end

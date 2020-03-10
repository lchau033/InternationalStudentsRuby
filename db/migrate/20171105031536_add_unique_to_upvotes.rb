class AddUniqueToUpvotes < ActiveRecord::Migration[5.0]
  def change
    add_index :upvotes, [:post_id, :user_id], :unique => true
  end
end

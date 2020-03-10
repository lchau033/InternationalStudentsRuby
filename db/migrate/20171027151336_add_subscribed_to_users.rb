class AddSubscribedToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :subscribed, :boolean
  end
end

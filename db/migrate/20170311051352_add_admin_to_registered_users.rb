class AddAdminToRegisteredUsers < ActiveRecord::Migration[5.0]
  def change
     add_column :registered_users, :admin, :boolean, default: false
  end
end


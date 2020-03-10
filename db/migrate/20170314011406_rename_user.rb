class RenameUser < ActiveRecord::Migration[5.0]
  def change
    rename_table :registered_users, :users
  end
end


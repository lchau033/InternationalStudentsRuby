class AddSignedInToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :signed_in, :boolean, default: false
  end
end

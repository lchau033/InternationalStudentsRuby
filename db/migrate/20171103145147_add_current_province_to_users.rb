class AddCurrentProvinceToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :current_province, :string
  end
end

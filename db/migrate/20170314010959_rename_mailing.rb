class RenameMailing < ActiveRecord::Migration[5.0]
  def change
    rename_table :users, :mailing_lists
  end
end


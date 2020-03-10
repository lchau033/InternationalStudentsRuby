class ChangeForeignKeyForDownvotes < ActiveRecord::Migration[5.0]
  def change
    rename_column :downvotes, :thredded_post_id, :post_id
  end
end

class ChangeForeignKeyForUpvotes < ActiveRecord::Migration[5.0]
  def change
    rename_column :upvotes, :thredded_post_id, :post_id
  end
end

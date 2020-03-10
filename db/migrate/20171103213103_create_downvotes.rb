class CreateDownvotes < ActiveRecord::Migration[5.0]
  def change
    create_table :downvotes do |t|
      t.references :thredded_post, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

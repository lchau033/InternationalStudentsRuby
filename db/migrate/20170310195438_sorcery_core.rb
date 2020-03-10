class SorceryCore < ActiveRecord::Migration[5.0]
  def change
    create_table :registered_users do |t|
      t.string :email,            :null => false
      t.string :crypted_password
      t.string :salt

      t.timestamps                :null => false
	  t.string :name
    end

    add_index :registered_users, :email, unique: true
  end
end


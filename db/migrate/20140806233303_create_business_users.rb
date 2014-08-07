class CreateBusinessUsers < ActiveRecord::Migration
  def change
    create_table :business_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :business_name
      t.string :industry
      t.string :business_size
      t.integer :user_count

      t.timestamps
    end
  end
end

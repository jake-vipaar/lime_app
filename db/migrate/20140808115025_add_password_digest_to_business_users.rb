class AddPasswordDigestToBusinessUsers < ActiveRecord::Migration
  def change
    add_column :business_users, :password_digest, :string
  end
end

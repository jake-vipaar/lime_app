class BusinessUser < ActiveRecord::Base
  attr_accessible :business_name, :business_size, :email, :first_name, :industry, :last_name, :password, :user_count
end

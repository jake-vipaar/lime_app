class BusinessUser < ActiveRecord::Base
  attr_accessible :business_name, :business_size, :email, :first_name, :industry, :last_name, :password, :user_count

  validates :business_name, presence: true
  validates :business_size, presence: true
  validates :email, uniqueness: true 
  validates :first_name, presence: true
  validates :industry, presence: true
  validates :last_name, presence: true
  validates :password, presence: true, length: { minimum: 8 }
  validates :user_count, presence: true
end

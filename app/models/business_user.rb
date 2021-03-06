class BusinessUser < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection
  has_secure_password validations: false #todo: add password_confirmation and get rid of validations: false

  validates :business_name, presence: true
  validates :business_size, presence: true
  validates :email, uniqueness: true 
  validates :first_name, presence: true
  validates :industry, presence: true
  validates :last_name, presence: true
  validates :password, presence: true, length: { minimum: 8 }
  validates :user_count, presence: true
end

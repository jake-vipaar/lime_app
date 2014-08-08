class BusinessUsersController < ApplicationController
	def new
	end

	def create
		@business_user = BusinessUser.new(business_user_params)
		render json: @business_user.save
	end

	def show
  		@business_user = BusinessUser.find(params[:id])
	end

	def index
		@business_users = BusinessUser.all
	end

	private 
		def business_user_params
			params.require(:business_user).permit(:business_name, :business_size, :first_name, :industry, :last_name, :password, :user_count, :password_digest, :password_confirmation)
		end
end

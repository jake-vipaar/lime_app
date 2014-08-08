class BusinessUsersController < ApplicationController
	def new
	end

	def create
		@business_user = BusinessUser.new(params[:business_user])
		render json: @business_user.save
	end

	def show
  		@business_user = BusinessUser.find(params[:id])
	end

	def index
		@business_users = BusinessUser.all
	end
end

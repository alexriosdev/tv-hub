class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_user

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.find_or_create_by(strong_params)
    render json: @user
  end
  
  def destroy
    User.delete(@user)
  end

  private

  def find_user
    @user = User.find_by(id: params[:id])
  end

  def strong_params
    params.require(:user).permit(:username)
  end
  
end

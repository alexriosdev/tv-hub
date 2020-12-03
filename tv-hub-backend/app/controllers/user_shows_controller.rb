class UserShowsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_user_show

  def index
    @user_shows = UserShow.all
    render json: @user_shows
  end

  def create
    @user_show = UserShow.find_or_create_by(strong_params)
    render json: @user_show
  end

  def update
    @user_show.assign_attributes(strong_params)
    @user_show.update(strong_params)
    render json: @user_show
  end

  def destroy
    UserShow.delete(@user_show)
  end

  private

  def find_user_show
    @user_show = UserShow.find_by(id: params[:id])
  end

  def strong_params
    params.require(:user_show).permit(:user_id, :show_id, :notes, :rating, :status)
  end
  
end

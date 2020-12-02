class UsersController < ApplicationController

  def index
    @user_shows = UserShow.all
    render :json => { :user_shows => @user_shows }, :status => :ok
  end
  
end

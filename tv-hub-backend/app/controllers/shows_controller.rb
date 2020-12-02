class ShowsController < ApplicationController

  def index
    @shows = Show.all
    render :json => { :shows => @shows }, :status => :ok
  end
  
  # # Save Show to DB 
  # def create
  #   @show = Show.create(show_params)
  #   render json: @show
  # end

  # def show
  #   @show = Show.find(params[:id])
  #   render json: @show
  # end

  # def show_params
  #   params.require(:show).permit(:name, :genre, :premiered, :image, :official_site)
  # end

end

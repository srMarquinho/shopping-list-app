class ItemsController < ApplicationController

  # before_filter :login_required, except: [:get_items]
  before_action :authenticate_user!, except: [:get_items]

  def index
    @items = current_user.items.all
    @user_position = session[:user_position]
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.user_id = current_user.id
    # @item.latitude = session[:latitude]
    # @item.longitude = session[:longitude]
    # @item.place_name = session[:place_name]
    # @item.address = session[:address]
    if @item.save
      redirect_to '/items'
    else
      render 'new'
    end
  end

  def show
    @item = Item.find(params[:id])
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    @item.update(latitude: session[:latitude])
    @item.update(longitude: session[:longitude])
    @item.update(place_name: session[:place_name])
    @item.update(address: session[:address])
    redirect_to '/items'
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    flash[:notice] = 'Item deleted successfully'
    redirect_to '/items'
  end

  def toggle
    @item = Item.find(params[:id])
    @item.completed == false ? @item.update(completed: true) : @item.update(completed: false)
  end

  def get_user_location
    session[:user_position] = [params[:lat], params[:lng]]
    @close_items = []
    current_user.items.all.each do |item|
      item_distance = item.distance_from(session[:user_position])
      @close_items << item if item_distance < 0.5
    end
    render json: @close_items
  end

  # def coords
  #   session[:latitude] = params[:lat]
  #   session[:longitude] = params[:lng]
  #   session[:place_name] = params[:name]
  #   session[:address] = params[:formatted_address]
  #   redirect_to '/items'
  # end

  def item_params
    params.require(:item).permit(:name, :description, :completed, :place_name, :address, :latitude, :longitude)
  end

end

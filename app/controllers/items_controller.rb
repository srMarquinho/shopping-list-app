class ItemsController < ApplicationController

  # before_filter :login_required, except: [:get_items]
  before_action :authenticate_user!, except: [:get_items]

  def index
    @user_position = session[:user_position]
    items = current_user.items.all.order(:updated_at).reverse
    @completed_items = items.select{ |item| item.completed }
    @incomplete_items = items.select{ |item| !item.completed }
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.user_id = current_user.id

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
  end

  def get_item_location
    close_items = []
    current_user.items.all.each do |item|
      item_distance = item.distance_from(session[:user_position])
      close_items << item if item_distance < 1.0
    end
    render json: close_items
  end

  def item_params
    params.require(:item).permit(:name, :description, :completed, :place_name, :address, :latitude, :longitude)
  end

end

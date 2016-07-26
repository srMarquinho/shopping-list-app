class ItemsController < ApplicationController

  before_action :authenticate_user!

  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
   Item.create(item_params)
   redirect_to '/items'
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


  def item_params
    params.require(:item).permit(:name, :description, :completed)
  end

end

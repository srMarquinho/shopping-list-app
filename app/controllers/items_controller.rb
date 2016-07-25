class ItemsController < ApplicationController
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



  def item_params
    params.require(:item).permit(:name, :description)
  end

end

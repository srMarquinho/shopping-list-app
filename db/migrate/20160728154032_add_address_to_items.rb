class AddAddressToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :street, :string
    add_column :items, :city, :string
    add_column :items, :post_code, :string
    add_column :items, :country, :string
  end
end

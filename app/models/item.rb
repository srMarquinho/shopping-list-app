class Item < ApplicationRecord

  validates :name, length: { minimum: 2 }

  belongs_to :user

end

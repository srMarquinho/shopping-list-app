class Item < ApplicationRecord

  validates :name, length: { minimum: 2 }

  belongs_to :user

  # geocoded_by :place_id
  # after_validation :geocode

  #  reverse_geocoded_by :latitude, :longitude
  #  after_validation :reverse_geocode


  #  def address
  #     [street, city, post_code, country].compact.join(', ')
  #   end


end

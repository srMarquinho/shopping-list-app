class Item < ApplicationRecord

  validates :name, length: { minimum: 2 }

  belongs_to :user

  def distance_from(position)
    Geocoder::Calculations.distance_between( position, [self.latitude, self.longitude])
  end
end

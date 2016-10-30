class Item < ApplicationRecord

  validates :name, length: { minimum: 2 }
  belongs_to :user

  scope :completed, -> { where(completed: true) }
  scope :incompleted, -> { where(completed: false) }

  def self.by_updated_at
    order(:updated_at).reverse
  end

  def distance_from(position)
    Geocoder::Calculations.distance_between( position, [self.latitude, self.longitude])
  end
end

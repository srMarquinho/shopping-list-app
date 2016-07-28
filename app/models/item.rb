class Item < ApplicationRecord

   geocoded_by :address
   after_validation :geocode

   reverse_geocoded_by :latitude, :longitude
   after_validation :reverse_geocode


   def address
     [street, city, post_code, country].compact.join(', ')
   end


end

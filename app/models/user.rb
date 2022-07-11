class User < ApplicationRecord
#    alias_attribute :user, :renter
#    alias_attribute :user, :owner

    has_many :bikerides
    has_many :bikes, through: :bikerides

    # has_many :rented_bikes, through: :bikerides, source: :bike, class_name: "Bike"
    # has_many :owned_bikes, through: :bikerides, source: :bike

    has_many :rented_bikes, class_name: "Bikeride", foreign_key: 'renter_id'
    has_many :owned_bikes, class_name: "Bike", foreign_key: 'owner_id'
end

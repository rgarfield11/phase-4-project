class Bike < ApplicationRecord
  has_many :bikerides

  belongs_to :owner, class_name: "User", foreign_key: "owner_id", optional: true
  has_many :renters, through: :bikerides, class_name: "User", foreign_key: "renter_id", source: :users

  # has_one :owner, through: :bikerides, source: :users
  # has_many :renters, through: :bikerides, source: :users
end

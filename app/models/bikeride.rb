class Bikeride < ApplicationRecord
  belongs_to :renter, class_name: "User", foreign_key: "renter_id"
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
  belongs_to :bike

  # validates :start, numericality: { less_than :end}
end

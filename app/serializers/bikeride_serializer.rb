class BikerideSerializer < ActiveModel::Serializer
  attributes :id, :start, :end
  has_one :renter
  has_one :owner
  has_one :bike
end

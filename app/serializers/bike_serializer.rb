class BikeSerializer < ActiveModel::Serializer
  attributes :id, :category, :age, :returned
  has_one :owner
end

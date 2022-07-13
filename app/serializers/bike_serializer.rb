class BikeSerializer < ActiveModel::Serializer
  attributes :id, :category, :age, :returned, :image_url
  has_one :owner
end

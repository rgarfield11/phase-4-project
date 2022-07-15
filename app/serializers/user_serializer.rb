class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :location
  has_many :owned_bikes
end

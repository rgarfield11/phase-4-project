# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




puts "🏕 Seeding..."
User.destroy_all
Bike.destroy_all
Bikeride.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


#users
10.times.each do 
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password(min_length: 8), location: Faker::Address.city)
end

#bikes
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Cruiser",age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Cruiser", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Cruiser", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10))
Bike.create(category: "Cruiser", age: "Child", returned: true, owner_id: rand(1..10))
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10))

#bikerides
20.times.each do 
    Bikeride.create!(renter_id: rand(1..10), owner_id: rand(1..10), bike_id: rand(1..20), start: Faker::Time.between(from: DateTime.now, to: DateTime.now + 1, format: :short), end: Faker::Time.between(from: DateTime.now + 2, to: DateTime.now + 3, format: :short))
end
puts "✅ Done seeding!"
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
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Internet.username, location: Faker::Address.city, password: "12345", password_confirmation: "12345")
end

#bikes
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://images.unsplash.com/photo-1596738141905-51e94b519d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
Bike.create(category: "Cruiser",age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://www.shopmyexchange.com/products/images/xlarge/8578830_1380.jpg")
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://meekboyz.com/wp-content/uploads/2017/09/mini-beast-hr.jpg")
Bike.create(category: "Cruiser", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://cdn7.bestreviews.com/images/v4mobile/product-promotion/5c5f874bfe1e4db911b4c09565a58936.jpg")
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://i.ytimg.com/vi/pZd_cxfraVo/maxresdefault.jpg")
Bike.create(category: "Mountain", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://rascalrides.com/wp-content/uploads/377a9c_0a1ea441af6b494c89c99b875843e5ffmv2_d_2365_1773_s_2-1024x768.jpeg")
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://cdn.shopify.com/s/files/1/0036/2764/7076/products/IMG_5729_470x352.jpg?v=1593037133")
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://s1.cdn.autoevolution.com/images/news/gallery/the-long-lost-mythical-tandem-bike-has-been-resurrected-with-electric-power_1.jpg")
Bike.create(category: "Road", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?webp=true&quality=90&resize=408%2C271")
Bike.create(category: "Road", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://marketplacer.imgix.net/9o/CCn-wIwpfc49lSv4nDeiJ7Hmg.jpeg?auto=format&fm=pjpg&fit=max&w=4032&h=3024&s=0ea50df118a206c5c276c11032bb3037")
Bike.create(category: "Cruiser", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://bicave.com/wp-content/uploads/2020/01/beach-cruiser-bikes.jpg")
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://i.ebayimg.com/images/g/3ssAAOSw171iqlK5/s-l500.jpg")
Bike.create(category: "Road", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://philiplochner.ghost.io/content/images/2020/04/10-most-expensive-road-bikes-2.jpg")
Bike.create(category: "Road", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://roadbikeaction.com/wp-content/uploads/2021/11/Pursuit-Road-14_e-OPEN-SPRD-750x430.jpg")
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://i.insider.com/61b261d2467d190018bcfd0b?width=600&format=jpeg&auto=webp")
Bike.create(category: "Tandem", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://i.ytimg.com/vi/g3vnT8HA-pc/maxresdefault.jpg")
Bike.create(category: "Road", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://roadbikeaction.com/wp-content/uploads/2022/02/Reader-Survey-Obed-GVR-_e-crop-scaled.jpg")
Bike.create(category: "Mountain", age: "Adult", returned: true, owner_id: rand(1..10), image_url: "https://i.insider.com/61b264c0c9eb7b0019f0d06d?width=600&format=jpeg&auto=webp")
Bike.create(category: "Cruiser", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://i.pinimg.com/originals/9a/d7/03/9ad7037692c35771df2e80d9e873c5e1.jpg")
Bike.create(category: "Road", age: "Child", returned: true, owner_id: rand(1..10), image_url: "https://www.cyclesprog.co.uk/wp-content/uploads/2016/11/frog-bikes-road-58-2017-20-inch-kids-bike-red.jpg")

#bikerides
20.times.each do 
    Bikeride.create!(renter_id: rand(1..10), owner_id: rand(1..10), bike_id: rand(1..20), start: Faker::Time.between(from: DateTime.now, to: DateTime.now + 1, format: :short), end: Faker::Time.between(from: DateTime.now + 2, to: DateTime.now + 3, format: :short))
end
puts "✅ Done seeding!"
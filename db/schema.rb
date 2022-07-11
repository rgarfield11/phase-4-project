# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_11_160302) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bikerides", force: :cascade do |t|
    t.bigint "owner_id"
    t.bigint "renter_id"
    t.bigint "bike_id", null: false
    t.datetime "start"
    t.datetime "end"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bike_id"], name: "index_bikerides_on_bike_id"
    t.index ["owner_id"], name: "index_bikerides_on_owner_id"
    t.index ["renter_id"], name: "index_bikerides_on_renter_id"
  end

  create_table "bikes", force: :cascade do |t|
    t.string "category"
    t.string "age"
    t.boolean "returned"
    t.integer "owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bikerides", "bikes"
  add_foreign_key "bikerides", "users", column: "owner_id"
  add_foreign_key "bikerides", "users", column: "renter_id"
end

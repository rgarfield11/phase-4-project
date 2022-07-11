class CreateBikerides < ActiveRecord::Migration[6.1]
  def change
    create_table :bikerides do |t|
      t.references :owner, foreign_key: { to_table: 'users' }, optional: true
      t.references :renter, foreign_key: { to_table: 'users' }, optional: true
      t.belongs_to :bike, null: false, foreign_key: true
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end

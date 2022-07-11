class CreateBikes < ActiveRecord::Migration[6.1]
  def change
    create_table :bikes do |t|
      t.string :category
      t.string :age
      t.boolean :returned
      t.integer :owner_id, foreign_key: { to_table: 'user' }

      t.timestamps
    end
  end
end

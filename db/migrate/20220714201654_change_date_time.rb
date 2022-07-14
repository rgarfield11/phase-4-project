class ChangeDateTime < ActiveRecord::Migration[6.1]
  def change
    change_column :bikerides, :start, :string
    change_column :bikerides, :end, :string
  end
end

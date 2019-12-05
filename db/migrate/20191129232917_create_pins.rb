class CreatePins < ActiveRecord::Migration[6.0]
  def change
    create_table :pins do |t|
      t.integer :map_id
      t.string :name
      t.integer :x
      t.integer :y
      t.string :color
      t.string :description

      t.timestamps
    end
  end
end

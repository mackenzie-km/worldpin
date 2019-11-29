class CreatePins < ActiveRecord::Migration[6.0]
  def change
    create_table :pins do |t|
      t.integer :map_id
      t.string :name
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end

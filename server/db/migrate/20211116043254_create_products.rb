class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :image
      t.string :name
      t.string :description
      t.integer :price
      t.integer :quantity
      t.float :rating
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :inventory, null: false, foreign_key: true

      t.timestamps
    end
  end
end

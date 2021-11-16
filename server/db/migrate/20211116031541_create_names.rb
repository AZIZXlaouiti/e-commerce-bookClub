class CreateNames < ActiveRecord::Migration[6.1]
  def change
    create_table :names do |t|
      t.string :src
      t.integer :likes
      t.integer :price
      t.integer :amount
      t.belongs_to :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end

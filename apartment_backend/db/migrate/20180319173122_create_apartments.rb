class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :address1
      t.string :address2
      t.string :city
      t.integer :zip_code
      t.string :state
      t.string :country
      t.string :name
      t.string :phone
      t.text :availability_hours

      t.timestamps
    end
  end
end

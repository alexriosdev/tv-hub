class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :image
      t.text :summary
      t.string :language
      t.string :show_type
      t.string :genres
      t.string :network
      t.string :premiered
      t.string :status
      t.float :rating
      t.integer :runtime
      t.string :official_site

      t.timestamps
    end
  end
end

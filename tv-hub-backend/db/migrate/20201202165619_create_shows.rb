class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :genre
      t.string :premiered
      t.string :image
      t.string :official_site

      t.timestamps
    end
  end
end

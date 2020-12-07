# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_02_165940) do

  create_table "shows", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.text "summary"
    t.string "language"
    t.string "show_type"
    t.string "genres"
    t.string "network"
    t.string "premiered"
    t.string "status"
    t.float "rating"
    t.integer "runtime"
    t.string "official_site"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_shows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "show_id", null: false
    t.string "notes"
    t.integer "rating"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["show_id"], name: "index_user_shows_on_show_id"
    t.index ["user_id"], name: "index_user_shows_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_shows", "shows"
  add_foreign_key "user_shows", "users"
end

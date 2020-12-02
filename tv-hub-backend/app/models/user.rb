class User < ApplicationRecord
  has_many :user_shows
  has_many :shows, through: :user_shows
end

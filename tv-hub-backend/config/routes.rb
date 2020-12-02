Rails.application.routes.draw do
  resources :users
  resources :shows
  resources :user_shows
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

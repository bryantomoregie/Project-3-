Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, :categories, :tasks, :lists, :swim_lanes
  post '/login', to: 'sessions#handle_login'
end

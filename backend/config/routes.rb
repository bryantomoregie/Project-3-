Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#handle_login'
  resources :users, :categories, :tasks, :lists, :swim_lanes, :user_lists
  get '/logout', to: 'sessions#destroy', as: 'logout'
end

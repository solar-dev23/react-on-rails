Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'movies/index'
      post 'movies/', to: 'movies#create'
      delete 'movies/:id', to: 'movies#destroy'
    end
  end

  resources :seats

  root 'movies#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

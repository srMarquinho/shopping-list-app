Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users

  # devise_scope :user do
  #   root to: "devise/sessions#new"
  # end

  root "items#index"

  get 'items/get_items'

  resources :items do
    post 'toggle', on: :member

  end
end

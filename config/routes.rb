Rails.application.routes.draw do

  devise_for :users
  get 'static_pages/index'

  root 'static_pages#index'

  scope :api do
    scope :v1 do
      resources :boards do
        resources :lists
      end
    end
  end

end

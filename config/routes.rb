Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :feeds
    resources :collections
    resources :categories
    resources :articles
  end
  root "static_pages#root"
end

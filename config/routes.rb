Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      namespace :phones do
        get :list
      end
    end
  end
end

Rails.application.routes.draw do
  resources :map, except: [:index, :edit, :new]
  resources :pin
end

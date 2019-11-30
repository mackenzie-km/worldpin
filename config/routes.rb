Rails.application.routes.draw do
  resources :maps, except: [:index, :edit, :new]

  resources :pins, except: [:edit, :new]

  resources :maps do
    resources :pins, except: [:edit, :new]
  end
end

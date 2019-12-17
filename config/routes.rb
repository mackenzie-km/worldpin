Rails.application.routes.draw do
  scope '/api' do
    resources :maps, except: [:index, :edit, :delete]

    resources :pins

    resources :maps do
      resources :pins, except: [:edit, :new]
    end
  end 
end

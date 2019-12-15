Rails.application.routes.draw do
  resources :maps, except: [:index, :edit, :delete]

  resources :pins

  resources :maps do
    resources :pins, except: [:edit, :new]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end

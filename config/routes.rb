Rails.application.routes.draw do
  scope '/api' do
    resources :maps, except: [:index, :edit, :delete]

    resources :pins

    resources :maps do
      resources :pins, except: [:edit, :new]
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end

# Best to namespace /api so that live app doesn't have duplicate routes
# In local app, it's fine because of proxy, but not in live app
# For all other urls - lead to fallback index so React takes over

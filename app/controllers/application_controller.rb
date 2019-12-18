class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => `#{Rails.root}/public/index.html`
  end
end

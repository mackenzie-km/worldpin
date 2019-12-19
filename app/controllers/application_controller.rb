# Note: Can't use the API for the root url or else won't render
# React file; must use action controller for root url 
class ApplicationController < ActionController::Base
  # Added this rule because no authentication in this app
  skip_before_action :verify_authenticity_token

  # Added fallback url so that if not api url, will serve react
  def fallback_index_html
    render :file => 'public/index.html'
  end
end

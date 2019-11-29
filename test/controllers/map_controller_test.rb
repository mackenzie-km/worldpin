require 'test_helper'

class MapControllerTest < ActionDispatch::IntegrationTest
  test "should get pin" do
    get map_pin_url
    assert_response :success
  end

end

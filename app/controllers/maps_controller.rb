class MapsController < ApplicationController
  before_action only: [:show, :edit, :update, :destroy] do
    find_map(params[:id])
  end
  def create
    @map = Map.new(map_params)
    render json: @map.to_json
  end

  def show
    render json: @map.to_json
  end

  def update
    @map.update(map_params)
    render json: @map.to_json
  end

  def destroy
    @map.delete_all
  end

  private

  def map_params
    params.require(:map).permit(:id, :title, :url, :pins)
  end

  def find_map(id)
    @map = Map.find(id)
    return @map
  end
end

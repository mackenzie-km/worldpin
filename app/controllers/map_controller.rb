class MapController < ApplicationController
  before_action :find_map, only: [:show, :edit, :update, :destroy]
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
    @map = Map.find(map_params[:id])
    return @map
  end
end

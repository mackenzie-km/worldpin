class MapsController < ApplicationController
  before_action only: [:show, :edit, :update, :destroy] do
    find_map(params[:id])
  end
  def create
    @map = Map.new(map_params)
    @map.save
    if @map.save
      render json: @map, status: 200
    else
      render json: @map.errors, status: :unprocessable_entity
    end
  end

  def show
    if @map
      render json: @map, status: 200
    else
      redirect_to "/404", :status => 404
    end
  end

  def update
    @map.update(map_params)
    if @map.save
      render json: @map, status: 200
    else
      render json: @map.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @map.save
      @map.delete_all
      render json: @map, status: 200
    else
      render json: @map.errors, status: :unprocessable_entity
    end
  end

  private

  def map_params
    params.permit(:id, :title, :url, :pins)
  end

  def find_map(id)
    @map = Map.find_by(id: id)
    return @map
  end
end

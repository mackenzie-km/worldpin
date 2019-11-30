class PinsController < ApplicationController
  before_action only: [:show, :edit, :update, :destroy] do
    find_pin(params[:id])
  end

  def index
    @pins = Pin.where(map_id: params[:map_id])
    render json: @pins.to_json
  end

  def create
    @pin = pin.new(pin_params)
    render json: @pin.to_json
  end

  def show
    render json: @pin.to_json
  end

  def update
    @pin.update(pin_params)
    render json: @pin.to_json
  end

  def destroy
    @pin.delete_all
  end

  private

  def pin_params
    params.require(:pin).permit(:id, :description, :name, :location, :map_id)
  end

  def find_pin(id)
    @pin = Pin.find(id)
    return @pin
  end
end

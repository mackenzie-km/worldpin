class PinsController < ApplicationController
  before_action only: [:show, :edit, :update, :destroy] do
    find_pin(params[:id])
  end

  def index
    @pins = Pin.where(map_id: params[:map_id])
    render json: @pins, status: 200
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.save
    render json: @pin, status: 200
  end

  def show
    render json: @pin, status: 200
  end

  def update
    @pin.update(pin_params)
    render json: @pin, status: 200
  end

  def destroy
    @pin.delete_all
  end

  private

  def pin_params
    params.permit(:id, :description, :name, :x, :y, :map_id, :color)
  end

  def find_pin(id)
    @pin = Pin.find_by(id: id)
    return @pin
  end
end

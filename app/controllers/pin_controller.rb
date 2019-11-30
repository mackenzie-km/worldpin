class PinController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def pin_params
    params.require(:pin).permit(:id, :description, :name, :location, :map_id)
  end
end

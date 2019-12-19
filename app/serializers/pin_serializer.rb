class PinSerializer < ActiveModel::Serializer
    # Need to add attributes so .json method converts these to json
  attributes :id, :map_id, :name, :x, :y, :description, :color
end

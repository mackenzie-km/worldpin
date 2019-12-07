class PinSerializer < ActiveModel::Serializer
  attributes :id, :map_id, :name, :x, :y, :description, :color
end

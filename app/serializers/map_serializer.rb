class MapSerializer < ActiveModel::Serializer
  # Need to add attributes so .json method converts these to json
  attributes :id, :title, :url, :pins, :created_at, :updated_at
end

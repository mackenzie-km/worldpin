class MapSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :pins, :created_at, :updated_at
end

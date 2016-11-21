module Types
  BlogType = GraphQL::ObjectType.define do
    name "Blog"
    description "A Blog"
    field :id, types.ID
    field :title, types.String
    field :content, types.String
  end
end

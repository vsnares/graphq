module Queries
  RootQueryType = GraphQL::ObjectType.define do
    name "RootQueryType"
    description "The query root for this schema"

    field :blog do
      type Types::BlogType
      argument :id, !types.ID
      resolve -> (obj, args, ctx) {
        Blog.find(args[:id])
      }
    end

    field :all_blogs, types[Types::BlogType] do
      resolve -> (obj, args, ctx) {
        Blog.all
      }
    end
  end
end

module Mutations
  RootMutationType = GraphQL::ObjectType.define do
    name "RootMutationType"

    field :createBlog do
      type Types::BlogType
      argument :blogFullName, !types.String
      resolve ->(obj, args, ctx) {
        blog = Blog.create(title: args[:blogFullName])
      }
    end
  end
end

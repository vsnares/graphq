module Mutations
  RootMutationType = GraphQL::ObjectType.define do
    name "RootMutationType"

    field :createBlog do
      type Types::BlogType
      argument :title, !types.String
      argument :content, types.String
      resolve ->(obj, args, ctx) {
        blog = Blog.create(title: args[:title], content: args[:content])
      }
    end
  end
end

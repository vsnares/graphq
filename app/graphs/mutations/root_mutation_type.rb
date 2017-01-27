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

    field :updateBlog do
      type Types::BlogType
      argument :id, !types.ID
      argument :title, !types.String
      argument :content, types.String
      resolve ->(obj, args, ctx) {
        Blog.find(args[:id]).update(title: args[:title], content: args[:content])
        Blog.find(args[:id])
      }
    end

    field :deleteBlog do
      type Types::BlogType
      argument :id, !types.ID
      resolve ->(obj, args, ctx) {
        Blog.find(args[:id]).delete
      }
    end
  end
end

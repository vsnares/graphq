QueryType = GraphQL::ObjectType.define do
  name "Query"
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

MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createBlog do
    type CreateBlogMutation
    resolve ->(obj, inputs, ctx) {
      blog = Blog.create(title: title,)
    }
  end
end

CreateBlogMutation = GraphQL::ObjectType.define do
  name "CreateBlog"
  field :title, !types.String
end



GraphSchema = GraphQL::Schema.define do
  query QueryType
  mutation MutationType
end

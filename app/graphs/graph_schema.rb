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


  field :createBlog, field: CreateBlogMutation.field
end

CreateBlogMutation = GraphQL::Relay::Mutation.define do

   name "CreateBlog"

   input_field :title,   !types.String
   input_field :content, !types.String

   return_field :blog, Types::BlogType

  resolve ->(obj, inputs, ctx) {
    blog = Blog.create(title: inputs[:title], content: inputs[:content])

    {
      blog: blog,
    }
  }
end



GraphSchema = GraphQL::Schema.define do
  query QueryType
  mutation MutationType
end

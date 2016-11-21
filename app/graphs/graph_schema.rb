QueryType = GraphQL::ObjectType.define do
  p "***********************"
  name "Query"
  description "The query root for this schema"

  field :blog do
    p "***********************"
    type Types::BlogType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      p args
      Blog.find(args[:id])
    }
  end
end


GraphSchema = GraphQL::Schema.define do
  query QueryType
end

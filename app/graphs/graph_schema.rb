GraphSchema = GraphQL::Schema.define do
  query Queries::RootQueryType
  mutation Mutations::RootMutationType
end

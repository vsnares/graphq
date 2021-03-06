Rails.application.routes.draw do
  get 'blogs', to: 'blogs#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  post "graphs/simple"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphs/simple"
  end
end

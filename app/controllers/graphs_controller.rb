class GraphsController < ApplicationController

  def simple
    query_string = params[:query]
    query_variables = params[:variables] || {}
    result = GraphSchema.execute(query_string, variables: query_variables)
    render json: result
  end
end

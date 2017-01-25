import {React, propTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BlogCard from './BlogCard'

class BlogPage extends React.Component {
  render () {
    const { push } = this.context.history;
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div>
        <BlogCard blog={this.props.data.Blog} handleCancel={push('/')}/>
      </div>
    )
  }
}

BlogPage.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Pokemon: React.PropTypes.object,
  }).isRequired,
  router: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
}

BlogPage.contextTypes = {
  history: propTypes.historyContext
};

const BlogQuery = gql`
  query BlogQuery($id: ID!) {
    Blog(id: $id) {
      id
      title
      content
    }
  }
`
const BlogPageWithQuery = graphql(BlogQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.blogId
    }
  })
})(BlogPage)

export default BlogPageWithQuery

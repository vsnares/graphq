import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BlogCard from './BlogCard'

class BlogPage extends React.Component {
  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div>
        <BlogCard blog={this.props.data.Blog} handleCancel={this.goBack}/>
      </div>
    )
  }

  goBack = () => {
    this.props.router.replace('/')
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
})(withRouter(BlogPage))

export default BlogPageWithQuery

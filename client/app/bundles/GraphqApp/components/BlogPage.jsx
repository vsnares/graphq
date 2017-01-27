import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BlogCard from './BlogCard'
import { filter } from 'graphql-anywhere'

class BlogPage extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      blog: React.PropTypes.object,
    }).isRequired,
    router: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    const blog = this.props.data.blog

    return (
      <div>
        <BlogCard blog={filter(BlogCard.fragments.blog, blog)}
                  handleCancel={this.goBack}
                  afterChange={this.goBack}/>
      </div>
    )
  }

  goBack = () => {
    this.props.router.replace('/blogs')
  }
}

const BlogQuery = gql`
  query BlogQuery($id: ID!) {
    blog(id: $id) {
      ... BlogCardBlog
    }
  }
  ${BlogCard.fragments.blog}
`
const BlogPageWithQuery = graphql(BlogQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.blogId
    }
  })
})(withRouter(BlogPage))

export default BlogPageWithQuery

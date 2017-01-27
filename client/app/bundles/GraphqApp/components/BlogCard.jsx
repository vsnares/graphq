import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'react-apollo'

class BlogCard extends React.Component {

  static fragments = {
    blog: gql`
      fragment BlogCardBlog on Blog {
        id
        title
        content
      }
    `
  }

  static propTypes = {
    blog: propType(BlogCard.fragments.blog).isRequired,
    handleCancel: React.PropTypes.func.isRequired,
    afterChange: React.PropTypes.func.isRequired,
    updateBlog: React.PropTypes.func.isRequired,
    deleteBlog: React.PropTypes.func.isRequired,
  }

  state = {
    title: this.props.blog.title,
    content: this.props.blog.content,
  }

  render () {
    return (
      <div>
        <input
          value={this.state.title}
          placeholder='Title'
          onChange={(e) => this.setState({title: e.target.value})}
        />
        <input
          value={this.state.content}
          placeholder='Content'
          onChange={(e) => this.setState({content: e.target.value})}
        />
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.props.handleCancel}>Cancel</button>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    )
  }

  handleUpdate = () => {
    const {title, content} = this.state
    console.log(this.props.blog.id)
    this.props.updateBlog({variables: { id: this.props.blog.id, title: title, content: content }})
      .then(this.props.afterChange)
  }

  handleDelete = () => {
    this.props.deleteBlog({variables: { id: this.props.blog.id }})
      .then(this.props.afterChange)
  }
}


const updateBlog = gql`
  mutation updateBlog($id: ID!, $title: String!, $content: String!) {
    updateBlog(id: $id, title: $title, content: $content) {
      id
      ... BlogCardBlog
    }
  }
  ${BlogCard.fragments.blog}
`

const deleteBlog = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      id
    }
  }
`

const BlogCardWithMutations =  compose(
  graphql(deleteBlog, {
    name : 'deleteBlog'
  }),
  graphql(updateBlog, {
    name: 'updateBlog'
  })
)(BlogCard)

export default BlogCardWithMutations

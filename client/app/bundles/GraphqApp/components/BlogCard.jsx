import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

export default class BlogCard extends React.Component {

  static fragments = {
    pokemon: gql`
      fragment BlogCardBlog on Blog {
        title
        content
      }
    `
  }

  static propTypes = {
    blog: propType(BlogCard.fragments.blog).isRequired,
    handleCancel: React.PropTypes.func.isRequired,
  }

  render () {
    return (
      <div>
        <input
          value={this.props.blog.title}
          placeholder='Title'
          readOnly={true}
        />
        <input
          value={this.props.blog.content}
          placeholder='Content'
          readOnly={true}
        />
        <button onClick={this.props.handleCancel}>Cancel</button>
      </div>
    )
  }
}
